# markdown-directory2pdf

[![Greenkeeper badge](https://badges.greenkeeper.io/ahashem/markdown-directory2pdf.svg)](https://greenkeeper.io/)

Convert markdown files in a directory or subdirectories into a single PDF file.

## Usage

#### 1. Clone the repo and install
```
$ git clone https://github.com/ahashem/markdown-directory2pdf.git
$ cd markdown-directory2pdf
$ yarn
```

#### 2. Copy your markdown file to a folder; for example: `./book_name/`.
#### 3. Run the script on the book directory

```
$ npm run md2pdf -- --directory="book_name"
```

#### 4. generated book should be in `./_books/book_name.pdf`.
