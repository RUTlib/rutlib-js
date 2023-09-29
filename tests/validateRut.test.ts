'use strict';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import {
  cleanRut,
  validateRut,
  getLastDigitOfRut,
  formatRut,
  generateRut,
  compareRuts
} from '../src';

describe('Clean rut function', () => {
  it('Clean valid RUTs', () => {
    expect(cleanRut('11.111.111-1')).is.equal('111111111');
    expect(cleanRut('11111111-1')).is.equal('111111111');
    expect(cleanRut('11111.111-1')).is.equal('111111111');
    expect(cleanRut('11.111.1111')).is.equal('111111111');
    expect(cleanRut('13552901-K')).is.equal('13552901K');
    expect(cleanRut('13552901-k')).is.equal('13552901K');
    expect(cleanRut('7850117-0')).is.equal('78501170');
  });

  it('Clean not valid RUTs', () => {
    expect(cleanRut('')).is.equal('');
    expect(cleanRut('qwerty')).is.equal('');
    expect(cleanRut('11.111.111-0')).is.equal('111111110');
    expect(cleanRut('11111111-0')).is.equal('111111110');
    expect(cleanRut('11111.111-0')).is.equal('111111110');
    expect(cleanRut('11.111.1110')).is.equal('111111110');
    expect(cleanRut('13552901-K')).is.equal('13552901K');
    expect(cleanRut('13552901-k')).is.equal('13552901K');
    expect(cleanRut('7850117-0')).is.equal('78501170');
  });
});

describe('ValidateRut function', () => {
  it('Valid RUTs', () => {
    expect(validateRut('1-9')).to.be.true;
    expect(validateRut('11.111.111-1')).to.be.true;
    expect(validateRut('111111111')).to.be.true;
    expect(validateRut('11111111-1')).to.be.true;
    expect(validateRut('11111.111-1')).to.be.true;
    expect(validateRut('11.111.1111')).to.be.true;
    expect(validateRut('13552901-K')).to.be.true;
    expect(validateRut('13552901-k')).to.be.true;
    expect(validateRut('7850117-0')).to.be.true;
  });

  it('Not Valids RUTs', () => {
    expect(validateRut('1-0')).to.be.false;
    expect(validateRut('11.111.111-0')).to.be.false;
    expect(validateRut('111111113')).to.be.false;
    expect(validateRut('11111111-K')).to.be.false;
    expect(validateRut('11111.111-K')).to.be.false;
    expect(validateRut('11.111.1113')).to.be.false;
    expect(validateRut('13552901-M')).to.be.false;
    expect(validateRut('0-0')).to.be.false;
    expect(validateRut('0-K')).to.be.false;
    expect(validateRut('0-3')).to.be.false;
  });
});

describe('Get last digit of RUT', () => {
  it('Get valids last digits', () => {
    expect(getLastDigitOfRut(0)).is.equal('0');
    expect(getLastDigitOfRut(1)).is.equal('9');
    expect(getLastDigitOfRut(2)).is.equal('7');
    expect(getLastDigitOfRut(3)).is.equal('5');
    expect(getLastDigitOfRut(4)).is.equal('3');
    expect(getLastDigitOfRut(5)).is.equal('1');
    expect(getLastDigitOfRut(6)).is.equal('K');
    expect(getLastDigitOfRut(7)).is.equal('8');
    expect(getLastDigitOfRut(8)).is.equal('6');
    expect(getLastDigitOfRut(9)).is.equal('4');
    expect(getLastDigitOfRut(1000)).is.equal('6');
    expect(getLastDigitOfRut(123)).is.equal('6');
  });
});

describe('Format RUTs', () => {
  it('Format RUTs with dots', () => {
    expect(formatRut('0')).is.equal('-');
    expect(formatRut('00')).is.equal('-');
    expect(formatRut('00000')).is.equal('-');
    expect(formatRut('1')).is.equal('-1');
    expect(formatRut('12345')).is.equal('1.234-5');
    expect(formatRut('111111-1')).is.equal('111.111-1');
    expect(formatRut('1111111-1')).is.equal('1.111.111-1');
    expect(formatRut('11111111-1')).is.equal('11.111.111-1');
    expect(formatRut('1111111111-1')).is.equal('1.111.111.111-1');
  });

  it('Format RUTs without dots', () => {
    expect(formatRut('0', false)).is.equal('-');
    expect(formatRut('00', false)).is.equal('-');
    expect(formatRut('00000', false)).is.equal('-');
    expect(formatRut('1', false)).is.equal('-1');
    expect(formatRut('12345', false)).is.equal('1234-5');
    expect(formatRut('111111-1', false)).is.equal('111111-1');
    expect(formatRut('1111111-1', false)).is.equal('1111111-1');
    expect(formatRut('11111111-1', false)).is.equal('11111111-1');
    expect(formatRut('1111111111-1', false)).is.equal('1111111111-1');
  });
});

describe('Generate Random rut', () => {
  it('Generate RUT with dots', () => {
    expect(generateRut(0)).to.have.lengthOf(0);
    expect(generateRut()).to.have.lengthOf(12);
    expect(generateRut(9)).to.have.lengthOf(13);
    expect(generateRut(10)).to.have.lengthOf(15);
  });

  it('Generate RUT without dots', () => {
    expect(generateRut(0, false)).to.have.lengthOf(0);
    expect(generateRut(8, false)).to.have.lengthOf(10);
    expect(generateRut(9, false)).to.have.lengthOf(11);
    expect(generateRut(10, false)).to.have.lengthOf(12);
  });
});

describe('Compare RUTs function', () => {
  it('Compare valid and equal RUTs', () => {
    const rut1 = '11.111.111-1';
    const rut2 = '11111111-1';
    expect(validateRut(rut1)).to.be.true;
    expect(validateRut(rut2)).to.be.true;
    expect(compareRuts(rut1, rut2)).to.be.true;
  });

  it('Compare valid and different RUTs', () => {
    const rut1 = '11.111.111-1';
    const rut2 = '12.345.678-5';
    expect(validateRut(rut1)).to.be.true;
    expect(validateRut(rut2)).to.be.true;
    expect(compareRuts(rut1, rut2)).to.be.false;
  });

  it('Compare invalid RUTs', () => {
    const rut1 = '11.111.111-2';
    const rut2 = '12.345.678-9';
    expect(validateRut(rut1)).to.be.false;
    expect(validateRut(rut2)).to.be.false;
    expect(() => compareRuts(rut1, rut2)).to.throw(Error);
  });

  it('Compare valid RUT with invalid RUT', () => {
    const rut1 = '11.111.111-1';
    const rut2 = '12.345.678-9';
    expect(validateRut(rut1)).to.be.true;
    expect(validateRut(rut2)).to.be.false;
    expect(() => compareRuts(rut1, rut2)).to.throw(Error);
  });
});
