# slidev-theme-tum-unofficial

An unofficial TUM presentation theme for [Slidev](https://sli.dev).

## Install

To install the theme, run the following command in your Slidev project:

```bash
pnpm add git+https://github.com/c-lyu/slidev-theme-tum-unofficial.git
```

## Usage

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

```md
---
theme: tum-unofficial
---
```

Learn more about [how to use a theme](https://sli.dev/themes/use).

To start the slide show:

- `pnpm install`
- `pnpm run dev`
- visit http://localhost:3030

To build the slide show:

- `pnpm run build`
- The output will be in the `dist` folder

To export the slide show as PDF:

- `pnpm run export`

## Components

The theme provides the following components:

**Internal Components**:
- **AuthorInfo**: Author information on the cover and ending page
- **Footer**: Footer with title and page number
- **TumLogo**: TUM logo
- **TumSketch**: TUM sketch image

**Custom Components**:
- **Alert**: Alert box
  - `color`: Background and text color. (String: `tumblue` | `red` | `green` | `sky` | `blue` | `yellow` | `purple` | `pink` | `orange`)
  - `icon`: Main icon. (String: `question` | `warning` | `check`)
- **Card**: Card box
  - `title`: Card title. (String)
  - `color`: Background and title text color. (String: `tumblue` | `red` | `green` | `sky` | `blue` | `yellow` | `purple` | `pink` | `orange`)
- **Image**: Image box
  - `src`: Image source. (String)
  - `alt`: Image alternative text and caption text. (String)
  - `figureClass`: Image figure class. (String)
  - `imgClass`: Image class. (String)
  - `objectFit`: Image object-fit style. (String, default: 'contain')
  - `width`: Image width. (String | Number)
  - `height`: Image height. (String | Number)
  - `caption`: Image caption text. (String)
  - `lazy`: Enable lazy loading. (Boolean, default: true)
  - `fallbackSrc`: Fallback image source if original fails to load. (String)
- **Marker**: Marker box
  - `color`: Marker color. (String: `tumblue` | `red` | `green` | `sky` | `blue` | `yellow` | `purple` | `pink` | `orange`)


## License

This theme is licensed under the [MIT License](./LICENSE).
