
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.0
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.3.0",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  user: 'user',
  passwd: 'passwd',
  email: 'email',
  role: 'role',
  teacher_id: 'teacher_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AthleteScalarFieldEnum = {
  id: 'id',
  name: 'name',
  birthday: 'birthday',
  phone: 'phone',
  responsible: 'responsible',
  date_start: 'date_start',
  pix_key: 'pix_key',
  cpf: 'cpf',
  address_id: 'address_id',
  is_student: 'is_student',
  is_associated: 'is_associated',
  is_teacher: 'is_teacher',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.InvestmentScalarFieldEnum = {
  id: 'id',
  investment_type_id: 'investment_type_id',
  athlete_id: 'athlete_id',
  value: 'value',
  description: 'description',
  date: 'date',
  paid: 'paid',
  proof: 'proof',
  investment_group_id: 'investment_group_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.InvestmentTypeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  can_see: 'can_see',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.InvestmentGroupScalarFieldEnum = {
  id: 'id',
  athlete_id: 'athlete_id',
  pair_id: 'pair_id',
  tournament_id: 'tournament_id',
  podium: 'podium',
  description: 'description',
  pair_amount: 'pair_amount',
  km: 'km',
  km_racional: 'km_racional',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ArenaScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address_id: 'address_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TournamentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  date_from: 'date_from',
  date_to: 'date_to',
  description: 'description',
  arena_id: 'arena_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CourtsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  number: 'number',
  is_single: 'is_single',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  street: 'street',
  number: 'number',
  complement: 'complement',
  neighborhood: 'neighborhood',
  city_state: 'city_state',
  zip_code: 'zip_code',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.TeacherAvailabilityScalarFieldEnum = {
  id: 'id',
  teacher_id: 'teacher_id',
  time_start: 'time_start',
  time_end: 'time_end',
  lesson_id: 'lesson_id',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.LessonScalarFieldEnum = {
  id: 'id',
  teacher_id: 'teacher_id',
  time_start: 'time_start',
  time_end: 'time_end',
  courts_id: 'courts_id',
  subject: 'subject',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.LessonAttendanceScalarFieldEnum = {
  id: 'id',
  lesson_id: 'lesson_id',
  student_id: 'student_id',
  did_attend: 'did_attend',
  reason: 'reason',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  admin: 'admin',
  operational: 'operational',
  teacher: 'teacher'
};

exports.Prisma.ModelName = {
  User: 'User',
  Athlete: 'Athlete',
  Investment: 'Investment',
  InvestmentType: 'InvestmentType',
  InvestmentGroup: 'InvestmentGroup',
  Arena: 'Arena',
  Tournament: 'Tournament',
  Courts: 'Courts',
  Address: 'Address',
  TeacherAvailability: 'TeacherAvailability',
  Lesson: 'Lesson',
  LessonAttendance: 'LessonAttendance'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
