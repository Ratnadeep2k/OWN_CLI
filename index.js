#!/usr/bin/env node
import { count } from './utils.js'
import fs from 'fs'
import _ from 'lodash'
const note =process.argv[2];
const newNote ={
    content:note,
    id:Date.now()
}
console.log(newNote);

//isolate code
//it canot be accessed from outside
// (function(){
//     console.log('IIFE');
// }) ();

//CLI command
//Chatting with the terminal

