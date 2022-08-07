
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "461d6a05159055555eb7dfb337c9fb271cbd4d7e"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.TKEYVALUESScalarFieldEnum = makeEnum({
  TABLENAME: 'TABLENAME',
  KEYVALUE: 'KEYVALUE'
});

exports.Prisma.TUPDATEVALUESScalarFieldEnum = makeEnum({
  TABLENAME: 'TABLENAME',
  UPDATEVALUE: 'UPDATEVALUE'
});

exports.Prisma.TCHRONOMESSAGES_HEAT1ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TRANSPONDER: 'C_TRANSPONDER',
  C_CANAL: 'C_CANAL',
  C_MESSAGE: 'C_MESSAGE'
});

exports.Prisma.TCHRONOMESSAGES_HEAT2ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TRANSPONDER: 'C_TRANSPONDER',
  C_CANAL: 'C_CANAL',
  C_MESSAGE: 'C_MESSAGE'
});

exports.Prisma.TCHRONOMESSAGES_HEAT3ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TRANSPONDER: 'C_TRANSPONDER',
  C_CANAL: 'C_CANAL',
  C_MESSAGE: 'C_MESSAGE'
});

exports.Prisma.TCHRONOMESSAGES_HEAT4ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TRANSPONDER: 'C_TRANSPONDER',
  C_CANAL: 'C_CANAL',
  C_MESSAGE: 'C_MESSAGE'
});

exports.Prisma.TCHRONOMESSAGES_HEAT5ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TRANSPONDER: 'C_TRANSPONDER',
  C_CANAL: 'C_CANAL',
  C_MESSAGE: 'C_MESSAGE'
});

exports.Prisma.TCHRONOMESSAGES_HEAT6ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TRANSPONDER: 'C_TRANSPONDER',
  C_CANAL: 'C_CANAL',
  C_MESSAGE: 'C_MESSAGE'
});

exports.Prisma.TCHRONOMESSAGES_HEAT7ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TRANSPONDER: 'C_TRANSPONDER',
  C_CANAL: 'C_CANAL',
  C_MESSAGE: 'C_MESSAGE'
});

exports.Prisma.TCHRONOMESSAGES_HEAT8ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TRANSPONDER: 'C_TRANSPONDER',
  C_CANAL: 'C_CANAL',
  C_MESSAGE: 'C_MESSAGE'
});

exports.Prisma.TCHRONOMESSAGES_HEAT9ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TRANSPONDER: 'C_TRANSPONDER',
  C_CANAL: 'C_CANAL',
  C_MESSAGE: 'C_MESSAGE'
});

exports.Prisma.TSTARTLIST_HEAT1ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_START: 'C_START'
});

exports.Prisma.TSTARTLIST_HEAT2ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_START: 'C_START'
});

exports.Prisma.TSTARTLIST_HEAT3ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_START: 'C_START'
});

exports.Prisma.TSTARTLIST_HEAT4ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_START: 'C_START'
});

exports.Prisma.TSTARTLIST_HEAT5ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_START: 'C_START'
});

exports.Prisma.TSTARTLIST_HEAT6ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_START: 'C_START'
});

exports.Prisma.TSTARTLIST_HEAT7ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_START: 'C_START'
});

exports.Prisma.TSTARTLIST_HEAT8ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_START: 'C_START'
});

exports.Prisma.TSTARTLIST_HEAT9ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_START: 'C_START'
});

exports.Prisma.TTIMEINFOS_HEAT1ScalarFieldEnum = makeEnum({
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TIME: 'C_TIME',
  C_PENALTY: 'C_PENALTY',
  C_INTER1: 'C_INTER1',
  C_INTER2: 'C_INTER2',
  C_INTER3: 'C_INTER3',
  C_INTER4: 'C_INTER4',
  C_INTER5: 'C_INTER5',
  C_INTER6: 'C_INTER6',
  C_INTER7: 'C_INTER7',
  C_INTER8: 'C_INTER8',
  C_INTER9: 'C_INTER9',
  C_SPEED1: 'C_SPEED1',
  C_SPEED2: 'C_SPEED2',
  C_SPEED3: 'C_SPEED3',
  C_SPEED4: 'C_SPEED4',
  C_SPEED5: 'C_SPEED5',
  C_SPEED6: 'C_SPEED6',
  C_SPEED7: 'C_SPEED7',
  C_SPEED8: 'C_SPEED8',
  C_SPEED9: 'C_SPEED9',
  C_DATA1: 'C_DATA1',
  C_DATA2: 'C_DATA2',
  C_DATA3: 'C_DATA3',
  C_DATA4: 'C_DATA4',
  C_DATA5: 'C_DATA5',
  C_DATA6: 'C_DATA6',
  C_DATA7: 'C_DATA7',
  C_DATA8: 'C_DATA8',
  C_REASON: 'C_REASON'
});

exports.Prisma.TTIMEINFOS_HEAT2ScalarFieldEnum = makeEnum({
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TIME: 'C_TIME',
  C_PENALTY: 'C_PENALTY',
  C_INTER1: 'C_INTER1',
  C_INTER2: 'C_INTER2',
  C_INTER3: 'C_INTER3',
  C_INTER4: 'C_INTER4',
  C_INTER5: 'C_INTER5',
  C_INTER6: 'C_INTER6',
  C_INTER7: 'C_INTER7',
  C_INTER8: 'C_INTER8',
  C_INTER9: 'C_INTER9',
  C_SPEED1: 'C_SPEED1',
  C_SPEED2: 'C_SPEED2',
  C_SPEED3: 'C_SPEED3',
  C_SPEED4: 'C_SPEED4',
  C_SPEED5: 'C_SPEED5',
  C_SPEED6: 'C_SPEED6',
  C_SPEED7: 'C_SPEED7',
  C_SPEED8: 'C_SPEED8',
  C_SPEED9: 'C_SPEED9',
  C_DATA1: 'C_DATA1',
  C_DATA2: 'C_DATA2',
  C_DATA3: 'C_DATA3',
  C_DATA4: 'C_DATA4',
  C_DATA5: 'C_DATA5',
  C_DATA6: 'C_DATA6',
  C_DATA7: 'C_DATA7',
  C_DATA8: 'C_DATA8',
  C_REASON: 'C_REASON'
});

exports.Prisma.TTIMEINFOS_HEAT3ScalarFieldEnum = makeEnum({
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TIME: 'C_TIME',
  C_PENALTY: 'C_PENALTY',
  C_INTER1: 'C_INTER1',
  C_INTER2: 'C_INTER2',
  C_INTER3: 'C_INTER3',
  C_INTER4: 'C_INTER4',
  C_INTER5: 'C_INTER5',
  C_INTER6: 'C_INTER6',
  C_INTER7: 'C_INTER7',
  C_INTER8: 'C_INTER8',
  C_INTER9: 'C_INTER9',
  C_SPEED1: 'C_SPEED1',
  C_SPEED2: 'C_SPEED2',
  C_SPEED3: 'C_SPEED3',
  C_SPEED4: 'C_SPEED4',
  C_SPEED5: 'C_SPEED5',
  C_SPEED6: 'C_SPEED6',
  C_SPEED7: 'C_SPEED7',
  C_SPEED8: 'C_SPEED8',
  C_SPEED9: 'C_SPEED9',
  C_DATA1: 'C_DATA1',
  C_DATA2: 'C_DATA2',
  C_DATA3: 'C_DATA3',
  C_DATA4: 'C_DATA4',
  C_DATA5: 'C_DATA5',
  C_DATA6: 'C_DATA6',
  C_DATA7: 'C_DATA7',
  C_DATA8: 'C_DATA8',
  C_REASON: 'C_REASON'
});

exports.Prisma.TTIMEINFOS_HEAT4ScalarFieldEnum = makeEnum({
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TIME: 'C_TIME',
  C_PENALTY: 'C_PENALTY',
  C_INTER1: 'C_INTER1',
  C_INTER2: 'C_INTER2',
  C_INTER3: 'C_INTER3',
  C_INTER4: 'C_INTER4',
  C_INTER5: 'C_INTER5',
  C_INTER6: 'C_INTER6',
  C_INTER7: 'C_INTER7',
  C_INTER8: 'C_INTER8',
  C_INTER9: 'C_INTER9',
  C_SPEED1: 'C_SPEED1',
  C_SPEED2: 'C_SPEED2',
  C_SPEED3: 'C_SPEED3',
  C_SPEED4: 'C_SPEED4',
  C_SPEED5: 'C_SPEED5',
  C_SPEED6: 'C_SPEED6',
  C_SPEED7: 'C_SPEED7',
  C_SPEED8: 'C_SPEED8',
  C_SPEED9: 'C_SPEED9',
  C_DATA1: 'C_DATA1',
  C_DATA2: 'C_DATA2',
  C_DATA3: 'C_DATA3',
  C_DATA4: 'C_DATA4',
  C_DATA5: 'C_DATA5',
  C_DATA6: 'C_DATA6',
  C_DATA7: 'C_DATA7',
  C_DATA8: 'C_DATA8',
  C_REASON: 'C_REASON'
});

exports.Prisma.TTIMEINFOS_HEAT5ScalarFieldEnum = makeEnum({
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TIME: 'C_TIME',
  C_PENALTY: 'C_PENALTY',
  C_INTER1: 'C_INTER1',
  C_INTER2: 'C_INTER2',
  C_INTER3: 'C_INTER3',
  C_INTER4: 'C_INTER4',
  C_INTER5: 'C_INTER5',
  C_INTER6: 'C_INTER6',
  C_INTER7: 'C_INTER7',
  C_INTER8: 'C_INTER8',
  C_INTER9: 'C_INTER9',
  C_SPEED1: 'C_SPEED1',
  C_SPEED2: 'C_SPEED2',
  C_SPEED3: 'C_SPEED3',
  C_SPEED4: 'C_SPEED4',
  C_SPEED5: 'C_SPEED5',
  C_SPEED6: 'C_SPEED6',
  C_SPEED7: 'C_SPEED7',
  C_SPEED8: 'C_SPEED8',
  C_SPEED9: 'C_SPEED9',
  C_DATA1: 'C_DATA1',
  C_DATA2: 'C_DATA2',
  C_DATA3: 'C_DATA3',
  C_DATA4: 'C_DATA4',
  C_DATA5: 'C_DATA5',
  C_DATA6: 'C_DATA6',
  C_DATA7: 'C_DATA7',
  C_DATA8: 'C_DATA8',
  C_REASON: 'C_REASON'
});

exports.Prisma.TTIMEINFOS_HEAT6ScalarFieldEnum = makeEnum({
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TIME: 'C_TIME',
  C_PENALTY: 'C_PENALTY',
  C_INTER1: 'C_INTER1',
  C_INTER2: 'C_INTER2',
  C_INTER3: 'C_INTER3',
  C_INTER4: 'C_INTER4',
  C_INTER5: 'C_INTER5',
  C_INTER6: 'C_INTER6',
  C_INTER7: 'C_INTER7',
  C_INTER8: 'C_INTER8',
  C_INTER9: 'C_INTER9',
  C_SPEED1: 'C_SPEED1',
  C_SPEED2: 'C_SPEED2',
  C_SPEED3: 'C_SPEED3',
  C_SPEED4: 'C_SPEED4',
  C_SPEED5: 'C_SPEED5',
  C_SPEED6: 'C_SPEED6',
  C_SPEED7: 'C_SPEED7',
  C_SPEED8: 'C_SPEED8',
  C_SPEED9: 'C_SPEED9',
  C_DATA1: 'C_DATA1',
  C_DATA2: 'C_DATA2',
  C_DATA3: 'C_DATA3',
  C_DATA4: 'C_DATA4',
  C_DATA5: 'C_DATA5',
  C_DATA6: 'C_DATA6',
  C_DATA7: 'C_DATA7',
  C_DATA8: 'C_DATA8',
  C_REASON: 'C_REASON'
});

exports.Prisma.TTIMEINFOS_HEAT7ScalarFieldEnum = makeEnum({
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TIME: 'C_TIME',
  C_PENALTY: 'C_PENALTY',
  C_INTER1: 'C_INTER1',
  C_INTER2: 'C_INTER2',
  C_INTER3: 'C_INTER3',
  C_INTER4: 'C_INTER4',
  C_INTER5: 'C_INTER5',
  C_INTER6: 'C_INTER6',
  C_INTER7: 'C_INTER7',
  C_INTER8: 'C_INTER8',
  C_INTER9: 'C_INTER9',
  C_SPEED1: 'C_SPEED1',
  C_SPEED2: 'C_SPEED2',
  C_SPEED3: 'C_SPEED3',
  C_SPEED4: 'C_SPEED4',
  C_SPEED5: 'C_SPEED5',
  C_SPEED6: 'C_SPEED6',
  C_SPEED7: 'C_SPEED7',
  C_SPEED8: 'C_SPEED8',
  C_SPEED9: 'C_SPEED9',
  C_DATA1: 'C_DATA1',
  C_DATA2: 'C_DATA2',
  C_DATA3: 'C_DATA3',
  C_DATA4: 'C_DATA4',
  C_DATA5: 'C_DATA5',
  C_DATA6: 'C_DATA6',
  C_DATA7: 'C_DATA7',
  C_DATA8: 'C_DATA8',
  C_REASON: 'C_REASON'
});

exports.Prisma.TTIMEINFOS_HEAT8ScalarFieldEnum = makeEnum({
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TIME: 'C_TIME',
  C_PENALTY: 'C_PENALTY',
  C_INTER1: 'C_INTER1',
  C_INTER2: 'C_INTER2',
  C_INTER3: 'C_INTER3',
  C_INTER4: 'C_INTER4',
  C_INTER5: 'C_INTER5',
  C_INTER6: 'C_INTER6',
  C_INTER7: 'C_INTER7',
  C_INTER8: 'C_INTER8',
  C_INTER9: 'C_INTER9',
  C_SPEED1: 'C_SPEED1',
  C_SPEED2: 'C_SPEED2',
  C_SPEED3: 'C_SPEED3',
  C_SPEED4: 'C_SPEED4',
  C_SPEED5: 'C_SPEED5',
  C_SPEED6: 'C_SPEED6',
  C_SPEED7: 'C_SPEED7',
  C_SPEED8: 'C_SPEED8',
  C_SPEED9: 'C_SPEED9',
  C_DATA1: 'C_DATA1',
  C_DATA2: 'C_DATA2',
  C_DATA3: 'C_DATA3',
  C_DATA4: 'C_DATA4',
  C_DATA5: 'C_DATA5',
  C_DATA6: 'C_DATA6',
  C_DATA7: 'C_DATA7',
  C_DATA8: 'C_DATA8',
  C_REASON: 'C_REASON'
});

exports.Prisma.TTIMEINFOS_HEAT9ScalarFieldEnum = makeEnum({
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_TIME: 'C_TIME',
  C_PENALTY: 'C_PENALTY',
  C_INTER1: 'C_INTER1',
  C_INTER2: 'C_INTER2',
  C_INTER3: 'C_INTER3',
  C_INTER4: 'C_INTER4',
  C_INTER5: 'C_INTER5',
  C_INTER6: 'C_INTER6',
  C_INTER7: 'C_INTER7',
  C_INTER8: 'C_INTER8',
  C_INTER9: 'C_INTER9',
  C_SPEED1: 'C_SPEED1',
  C_SPEED2: 'C_SPEED2',
  C_SPEED3: 'C_SPEED3',
  C_SPEED4: 'C_SPEED4',
  C_SPEED5: 'C_SPEED5',
  C_SPEED6: 'C_SPEED6',
  C_SPEED7: 'C_SPEED7',
  C_SPEED8: 'C_SPEED8',
  C_SPEED9: 'C_SPEED9',
  C_DATA1: 'C_DATA1',
  C_DATA2: 'C_DATA2',
  C_DATA3: 'C_DATA3',
  C_DATA4: 'C_DATA4',
  C_DATA5: 'C_DATA5',
  C_DATA6: 'C_DATA6',
  C_DATA7: 'C_DATA7',
  C_DATA8: 'C_DATA8',
  C_REASON: 'C_REASON'
});

exports.Prisma.TTIMERECORDS_HEAT1_FINISHScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT1_INTER1ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT1_INTER2ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT1_STARTScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT2_FINISHScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT2_INTER1ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT2_INTER2ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT2_STARTScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT3_FINISHScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT3_INTER1ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT3_INTER2ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT3_STARTScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT4_FINISHScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT4_INTER1ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT4_INTER2ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT4_STARTScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT5_FINISHScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT5_INTER1ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT5_INTER2ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT5_STARTScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT6_FINISHScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT6_INTER1ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT6_INTER2ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT6_STARTScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT7_FINISHScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT7_INTER1ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT7_INTER2ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT7_STARTScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT8_FINISHScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT8_INTER1ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT8_INTER2ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT8_STARTScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT9_FINISHScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT9_INTER1ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT9_INTER2ScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.TTIMERECORDS_HEAT9_STARTScalarFieldEnum = makeEnum({
  C_LINE: 'C_LINE',
  C_NUM: 'C_NUM',
  C_STATUS: 'C_STATUS',
  C_HOUR1: 'C_HOUR1',
  C_HOUR2: 'C_HOUR2',
  C_SPEED: 'C_SPEED',
  C_LAP: 'C_LAP',
  C_TRANSPONDER_NUM: 'C_TRANSPONDER_NUM',
  C_TRANSPONDER_INFOS: 'C_TRANSPONDER_INFOS',
  C_INFO1: 'C_INFO1',
  C_INFO2: 'C_INFO2'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  TKEYVALUES: 'TKEYVALUES',
  TUPDATEVALUES: 'TUPDATEVALUES',
  TCHRONOMESSAGES_HEAT1: 'TCHRONOMESSAGES_HEAT1',
  TCHRONOMESSAGES_HEAT2: 'TCHRONOMESSAGES_HEAT2',
  TCHRONOMESSAGES_HEAT3: 'TCHRONOMESSAGES_HEAT3',
  TCHRONOMESSAGES_HEAT4: 'TCHRONOMESSAGES_HEAT4',
  TCHRONOMESSAGES_HEAT5: 'TCHRONOMESSAGES_HEAT5',
  TCHRONOMESSAGES_HEAT6: 'TCHRONOMESSAGES_HEAT6',
  TCHRONOMESSAGES_HEAT7: 'TCHRONOMESSAGES_HEAT7',
  TCHRONOMESSAGES_HEAT8: 'TCHRONOMESSAGES_HEAT8',
  TCHRONOMESSAGES_HEAT9: 'TCHRONOMESSAGES_HEAT9',
  TSTARTLIST_HEAT1: 'TSTARTLIST_HEAT1',
  TSTARTLIST_HEAT2: 'TSTARTLIST_HEAT2',
  TSTARTLIST_HEAT3: 'TSTARTLIST_HEAT3',
  TSTARTLIST_HEAT4: 'TSTARTLIST_HEAT4',
  TSTARTLIST_HEAT5: 'TSTARTLIST_HEAT5',
  TSTARTLIST_HEAT6: 'TSTARTLIST_HEAT6',
  TSTARTLIST_HEAT7: 'TSTARTLIST_HEAT7',
  TSTARTLIST_HEAT8: 'TSTARTLIST_HEAT8',
  TSTARTLIST_HEAT9: 'TSTARTLIST_HEAT9',
  TTIMEINFOS_HEAT1: 'TTIMEINFOS_HEAT1',
  TTIMEINFOS_HEAT2: 'TTIMEINFOS_HEAT2',
  TTIMEINFOS_HEAT3: 'TTIMEINFOS_HEAT3',
  TTIMEINFOS_HEAT4: 'TTIMEINFOS_HEAT4',
  TTIMEINFOS_HEAT5: 'TTIMEINFOS_HEAT5',
  TTIMEINFOS_HEAT6: 'TTIMEINFOS_HEAT6',
  TTIMEINFOS_HEAT7: 'TTIMEINFOS_HEAT7',
  TTIMEINFOS_HEAT8: 'TTIMEINFOS_HEAT8',
  TTIMEINFOS_HEAT9: 'TTIMEINFOS_HEAT9',
  TTIMERECORDS_HEAT1_FINISH: 'TTIMERECORDS_HEAT1_FINISH',
  TTIMERECORDS_HEAT1_INTER1: 'TTIMERECORDS_HEAT1_INTER1',
  TTIMERECORDS_HEAT1_INTER2: 'TTIMERECORDS_HEAT1_INTER2',
  TTIMERECORDS_HEAT1_START: 'TTIMERECORDS_HEAT1_START',
  TTIMERECORDS_HEAT2_FINISH: 'TTIMERECORDS_HEAT2_FINISH',
  TTIMERECORDS_HEAT2_INTER1: 'TTIMERECORDS_HEAT2_INTER1',
  TTIMERECORDS_HEAT2_INTER2: 'TTIMERECORDS_HEAT2_INTER2',
  TTIMERECORDS_HEAT2_START: 'TTIMERECORDS_HEAT2_START',
  TTIMERECORDS_HEAT3_FINISH: 'TTIMERECORDS_HEAT3_FINISH',
  TTIMERECORDS_HEAT3_INTER1: 'TTIMERECORDS_HEAT3_INTER1',
  TTIMERECORDS_HEAT3_INTER2: 'TTIMERECORDS_HEAT3_INTER2',
  TTIMERECORDS_HEAT3_START: 'TTIMERECORDS_HEAT3_START',
  TTIMERECORDS_HEAT4_FINISH: 'TTIMERECORDS_HEAT4_FINISH',
  TTIMERECORDS_HEAT4_INTER1: 'TTIMERECORDS_HEAT4_INTER1',
  TTIMERECORDS_HEAT4_INTER2: 'TTIMERECORDS_HEAT4_INTER2',
  TTIMERECORDS_HEAT4_START: 'TTIMERECORDS_HEAT4_START',
  TTIMERECORDS_HEAT5_FINISH: 'TTIMERECORDS_HEAT5_FINISH',
  TTIMERECORDS_HEAT5_INTER1: 'TTIMERECORDS_HEAT5_INTER1',
  TTIMERECORDS_HEAT5_INTER2: 'TTIMERECORDS_HEAT5_INTER2',
  TTIMERECORDS_HEAT5_START: 'TTIMERECORDS_HEAT5_START',
  TTIMERECORDS_HEAT6_FINISH: 'TTIMERECORDS_HEAT6_FINISH',
  TTIMERECORDS_HEAT6_INTER1: 'TTIMERECORDS_HEAT6_INTER1',
  TTIMERECORDS_HEAT6_INTER2: 'TTIMERECORDS_HEAT6_INTER2',
  TTIMERECORDS_HEAT6_START: 'TTIMERECORDS_HEAT6_START',
  TTIMERECORDS_HEAT7_FINISH: 'TTIMERECORDS_HEAT7_FINISH',
  TTIMERECORDS_HEAT7_INTER1: 'TTIMERECORDS_HEAT7_INTER1',
  TTIMERECORDS_HEAT7_INTER2: 'TTIMERECORDS_HEAT7_INTER2',
  TTIMERECORDS_HEAT7_START: 'TTIMERECORDS_HEAT7_START',
  TTIMERECORDS_HEAT8_FINISH: 'TTIMERECORDS_HEAT8_FINISH',
  TTIMERECORDS_HEAT8_INTER1: 'TTIMERECORDS_HEAT8_INTER1',
  TTIMERECORDS_HEAT8_INTER2: 'TTIMERECORDS_HEAT8_INTER2',
  TTIMERECORDS_HEAT8_START: 'TTIMERECORDS_HEAT8_START',
  TTIMERECORDS_HEAT9_FINISH: 'TTIMERECORDS_HEAT9_FINISH',
  TTIMERECORDS_HEAT9_INTER1: 'TTIMERECORDS_HEAT9_INTER1',
  TTIMERECORDS_HEAT9_INTER2: 'TTIMERECORDS_HEAT9_INTER2',
  TTIMERECORDS_HEAT9_START: 'TTIMERECORDS_HEAT9_START'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
