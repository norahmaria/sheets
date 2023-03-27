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

		const css = await readFile('src/style.css', 'utf-8');

		await page.emulateMediaType('screen');

		await page.setContent(`<style>${css}</style>${html}`);

		const pdf = await page.pdf({
			margin: {
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			},

			scale: 1 / 0.75,
			// displayHeaderFooter: false,
		});

		await writeFile('pdf.pdf', pdf);

		console.log('Created PDF');

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
