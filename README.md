# Life in Weeks
An Astro project to create your own "Your Life in Weeks", an interactive visualization where each rectangle represents a week of your life.

Demo: [https://juanchiparra.github.io/astro-life-in-weeks/](https://juanchiparra.github.io/astro-life-in-weeks/)

![life-in-weeks](/life-in-weeks.png)

Inspired by [Buster Benson's](https://busterbenson.com/life-in-weeks) project, which was itself influenced by [Tim Urban's](https://waitbutwhy.com/2014/05/life-weeks.html) article, this project was developed.

## Features
- A graphical representation of your life in weeks
- Easy configuration for dynamic data
- Customizable CSS
- Responsive design
- Interactive tooltip
- Multiple default styles

### For future upgrade
- More default styles

## Project structure
```
astro-life-in-weeks/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json

```

## Getting started
```bash
# Clone this repository
git clone https://github.com/juanchiparra/astro-life-in-weeks.git
cd astro-life-in-weeks
    
## Install the dependencies
npm install
    
## Start the development server
npm run dev
```

## Commands
- `npm run dev`
- `npm run build`
- `npm run preview`

## How to Use
 In some files there will be comments indicating what you should change

```bash
- /components
  - Legend.astro
  - Weeks.astro
- /data
  - legends.json
  - sections.json
  - weeks.json
- /layouts
  - Layout.astro
- /pages
  - Index.astro
- /styles
  - global.css
  - variables.css
  - weeks.css
 ```

> [!CAUTION]
> If you are going to upload it to GitHub, make sure to set up astro.config.mjs and workflows/deploy.yml

## Contributions
Contributions are welcome! If you encounter a problem or have an idea to improve the project, open an issue or send a pull request.

