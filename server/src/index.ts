import { writeFile, readFile } from 'node:fs/promises';

import puppeteer from 'puppeteer';
import express from 'express';
import cors from 'cors';

const main = async () => {
	const browser = await puppeteer.launch({
		headless: true,
	});

	const app = express();

	app.use(express.json({ limit: '200mb' }));

	app.use(cors());

	/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
	app.post('/convert', async (req, res) => {
		const { html, devicePixelRatio } = req.body;

		const page = await browser.newPage();

		await page.setViewport({
			deviceScaleFactor: devicePixelRatio,

			/** @see https://www.a4-size.com/a4-size-in-pixels/?size=a4&unit=px&ppi=96 */
			width: 794,
			height: 1123,
		});

		const css = await readFile('src/style.css', 'utf-8');

		await page.setContent(`<style>${css}</style>${html}`);

		const pdf = await page.pdf({
			margin: {
				top: '2cm',
				left: '2cm',
				right: '2cm',
				bottom: '2cm',
			},

			scale: 1 / 0.65,

			displayHeaderFooter: false,
		});

		await writeFile('pdf.pdf', pdf);

		res.status(200).end();

		await page.close();
	});

	app.listen(3000, () => {
		/* eslint-disable-next-line no-console */
		console.log('Running PDF Server on http://localhost:5000');
	});
};

/* eslint-disable-next-line @typescript-eslint/no-floating-promises */
main();
