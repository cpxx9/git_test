#!/usr/bin/env node
// import '../CSS/styles.css';
import LinkedList from './LinkedList';

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.clearList();
console.log(ll);
// ll.getAt(2);
