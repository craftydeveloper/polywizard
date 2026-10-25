import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/polymarket-proxy.js';
function recorder(){return {headers:{},statusCode:0,body:null,setHeader(name,value){this.headers[name]=value;},status(code){this.statusCode=code;return this;},json(body){this.body=body;return this;}};}
test('encodes the query and returns upstream JSON',async()=>{const original=globalThis.fetch;let requested='';globalThis.fetch=async input=>{requested=String(input);return {json:async()=>[{id:'sample-market'}]};};const res=recorder();try{await handler({query:{q:'city & transit',limit:5}},res);}finally{globalThis.fetch=original;}assert.equal(res.statusCode,200);assert.equal(res.headers['Access-Control-Allow-Origin'],'*');assert.ok(requested.includes('search=city%20%26%20transit'));assert.equal(res.body[0].id,'sample-market');});
test('reports an upstream network failure',async()=>{const original=globalThis.fetch;globalThis.fetch=async()=>{throw new Error('offline');};const res=recorder();try{await handler({query:{}},res);}finally{globalThis.fetch=original;}assert.equal(res.statusCode,500);assert.equal(res.body.error,'offline');});
