import { resolve } from 'path';

export default {
  input: 'index.js', 
  output: {
    file: 'dist/bundle.js', 
    format: 'iife', 
    name: 'MyBundle', 
  },
};