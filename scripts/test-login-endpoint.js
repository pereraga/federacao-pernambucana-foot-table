import handler from '../api/auth/login.js';
import { EventEmitter } from 'node:events';

class MockReq extends EventEmitter {
  constructor(body) {
    super();
    this.method = 'POST';
    this.headers = {
      'content-type': 'application/json',
      'x-forwarded-for': '127.0.0.1'
    };
    this.body = body;
  }
}

class MockRes extends EventEmitter {
  constructor() {
    super();
    this.headers = {};
    this.statusCode = 200;
  }
  setHeader(k, v) { this.headers[k.toLowerCase()] = v; }
  getHeader(k) { return this.headers[k.toLowerCase()]; }
  removeHeader(k) { delete this.headers[k.toLowerCase()]; }
  end(data) {
    this.data = data;
    this.emit('finish');
  }
}

async function test(user, password) {
  const req = new MockReq({ user, password });
  const res = new MockRes();
  await handler(req, res);
  console.log(`Test [${user}] / [${password}] => Status: ${res.statusCode}, Body: ${res.data}, Cookie: ${res.headers['set-cookie'] ? 'PRESENT' : 'NONE'}`);
}

async function run() {
  await test('gabrielacessor@foot-table.pe.org', 'admin');
  await test('gabrielacessor', 'admin');
  await test('admin', 'admin');
  await test('adrianomello@foot-table.pe.org', 'admin');
}

run();
