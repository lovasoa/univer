import array from './function-list/array/en-US';
import compatibility from './function-list/compatibility/en-US';
import cube from './function-list/cube/en-US';
import database from './function-list/database/en-US';
import date from './function-list/date/en-US';
import engineering from './function-list/engineering/en-US';
import financial from './function-list/financial/en-US';
import information from './function-list/information/en-US';
import logical from './function-list/logical/en-US';
import lookup from './function-list/lookup/en-US';
import math from './function-list/math/en-US';
import statistical from './function-list/statistical/en-US';
import text from './function-list/text/en-US';
import univer from './function-list/univer/en-US';
import web from './function-list/web/en-US';

export default {
    formula: {
        insert: {
            tooltip: 'Functions',
            sum: 'SUM',
            average: 'AVERAGE',
            count: 'COUNT',
            max: 'MAX',
            min: 'MIN',
            more: 'More Functions...',
        },
        functionList: {
            ...financial,
            ...date,
            ...math,
            ...statistical,
            ...lookup,
            ...database,
            ...text,
            ...logical,
            ...information,
            ...engineering,
            ...cube,
            ...compatibility,
            ...web,
            ...array,
            ...univer,
        },
        prompt: {
            helpExample: 'EXAMPLE',
            helpAbstract: 'ABOUT',
            required: 'Required.',
            optional: 'Optional.',
        },
        functionType: {
            financial: 'Financial',
            date: 'Date & Time',
            math: 'Math & Trig',
            statistical: 'Statistical',
            lookup: 'Lookup & Reference',
            database: 'Database',
            text: 'Text',
            logical: 'Logical',
            information: 'Information',
            engineering: 'Engineering',
            cube: 'Cube',
            compatibility: 'Compatibility',
            web: 'Web',
            array: 'Array',
            univer: 'Univer',
        },
        moreFunctions: {
            confirm: 'Confirm',
            prev: 'Previous',
            next: 'Next',
            searchFunctionPlaceholder: 'Search function',
            allFunctions: 'All Functions',
            syntax: 'SYNTAX',
        },
    },
};
