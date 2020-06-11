'use strict'

/*
|--------------------------------------------------------------------------
| SalaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Sala = use('App/Models/Sala')

class SalaSeeder {
  async run () {
    await Sala.createMany([
      {nome: 'AB01', capacidade: 30, tipo: 'S'},
      {nome: 'AB02', capacidade: 40, tipo: 'S'},
      {nome: 'AB03', capacidade: 50, tipo: 'S'},
      {nome: 'Laboratório 01', capacidade: 30, tipo: 'L'},
      {nome: 'Laboratório 02', capacidade: 40, tipo: 'L'},
      {nome: 'Laboratório 03', capacidade: 50, tipo: 'L'},
      {nome: 'Laboratório 06', capacidade: 60, tipo: 'L'},
    ])
  }
}

module.exports = SalaSeeder
