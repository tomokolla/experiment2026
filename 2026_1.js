/*************** 
 * 2026_1 *
 ***************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = '2026_1';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code_2
learned_words = [];
n_conditions = 15;
// Run 'Before Experiment' code from code_timer
time_limit = 600;
time_message = "";
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(inst_1RoutineBegin());
flowScheduler.add(inst_1RoutineEachFrame());
flowScheduler.add(inst_1RoutineEnd());
flowScheduler.add(inst_2RoutineBegin());
flowScheduler.add(inst_2RoutineEachFrame());
flowScheduler.add(inst_2RoutineEnd());
flowScheduler.add(inst_3RoutineBegin());
flowScheduler.add(inst_3RoutineEachFrame());
flowScheduler.add(inst_3RoutineEnd());
flowScheduler.add(inst_mailRoutineBegin());
flowScheduler.add(inst_mailRoutineEachFrame());
flowScheduler.add(inst_mailRoutineEnd());
flowScheduler.add(inst_ageRoutineBegin());
flowScheduler.add(inst_ageRoutineEachFrame());
flowScheduler.add(inst_ageRoutineEnd());
flowScheduler.add(inst_sexRoutineBegin());
flowScheduler.add(inst_sexRoutineEachFrame());
flowScheduler.add(inst_sexRoutineEnd());
flowScheduler.add(inst_setumei_1RoutineBegin());
flowScheduler.add(inst_setumei_1RoutineEachFrame());
flowScheduler.add(inst_setumei_1RoutineEnd());
flowScheduler.add(inst_setumei_2RoutineBegin());
flowScheduler.add(inst_setumei_2RoutineEachFrame());
flowScheduler.add(inst_setumei_2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(inst_gakusyuRoutineBegin());
flowScheduler.add(inst_gakusyuRoutineEachFrame());
flowScheduler.add(inst_gakusyuRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


flowScheduler.add(inst_JOLRoutineBegin());
flowScheduler.add(inst_JOLRoutineEachFrame());
flowScheduler.add(inst_JOLRoutineEnd());
const jol_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(jol_loopLoopBegin(jol_loopLoopScheduler));
flowScheduler.add(jol_loopLoopScheduler);
flowScheduler.add(jol_loopLoopEnd);


flowScheduler.add(inst_keisanRoutineBegin());
flowScheduler.add(inst_keisanRoutineEachFrame());
flowScheduler.add(inst_keisanRoutineEnd());
flowScheduler.add(Keisan_newRoutineBegin());
flowScheduler.add(Keisan_newRoutineEachFrame());
flowScheduler.add(Keisan_newRoutineEnd());
flowScheduler.add(inst_testRoutineBegin());
flowScheduler.add(inst_testRoutineEachFrame());
flowScheduler.add(inst_testRoutineEnd());
const test_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_trialsLoopBegin(test_trialsLoopScheduler));
flowScheduler.add(test_trialsLoopScheduler);
flowScheduler.add(test_trialsLoopEnd);


flowScheduler.add(inst_URLRoutineBegin());
flowScheduler.add(inst_URLRoutineEachFrame());
flowScheduler.add(inst_URLRoutineEnd());
flowScheduler.add(quitPsychoJS, 'ご協力ありがとうございました.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'word_practice.xlsx', 'path': 'word_practice.xlsx'},
    {'name': 'demo1.png', 'path': 'demo1.png'},
    {'name': 'demo2.png', 'path': 'demo2.png'},
    {'name': 'demo3.png', 'path': 'demo3.png'},
    {'name': 'word_main.xlsx', 'path': 'word_main.xlsx'},
    {'name': 'V1S1.PNG', 'path': 'V1S1.PNG'},
    {'name': 'test_V1S1.png', 'path': 'test_V1S1.png'},
    {'name': 'V1S2.PNG', 'path': 'V1S2.PNG'},
    {'name': 'test_V1S2.png', 'path': 'test_V1S2.png'},
    {'name': 'V2S1.PNG', 'path': 'V2S1.PNG'},
    {'name': 'test_V2S1.png', 'path': 'test_V2S1.png'},
    {'name': 'V3S1.PNG', 'path': 'V3S1.PNG'},
    {'name': 'test_V3S1.png', 'path': 'test_V3S1.png'},
    {'name': 'V3S2.PNG', 'path': 'V3S2.PNG'},
    {'name': 'test_V3S2.png', 'path': 'test_V3S2.png'},
    {'name': 'A1S1.PNG', 'path': 'A1S1.PNG'},
    {'name': 'test_A1S1.png', 'path': 'test_A1S1.png'},
    {'name': 'A1S2.PNG', 'path': 'A1S2.PNG'},
    {'name': 'test_A1S2.png', 'path': 'test_A1S2.png'},
    {'name': 'A2S1.PNG', 'path': 'A2S1.PNG'},
    {'name': 'test_A2S1.png', 'path': 'test_A2S1.png'},
    {'name': 'A2S2.PNG', 'path': 'A2S2.PNG'},
    {'name': 'test_A2S2.png', 'path': 'test_A2S2.png'},
    {'name': 'A3S1.PNG', 'path': 'A3S1.PNG'},
    {'name': 'test_A3S1.png', 'path': 'test_A3S1.png'},
    {'name': 'N1S1.PNG', 'path': 'N1S1.PNG'},
    {'name': 'test_N1S1.png', 'path': 'test_N1S1.png'},
    {'name': 'N1S2.PNG', 'path': 'N1S2.PNG'},
    {'name': 'test_N1S2.png', 'path': 'test_N1S2.png'},
    {'name': 'N2S1.PNG', 'path': 'N2S1.PNG'},
    {'name': 'test_N2S1.png', 'path': 'test_N2S1.png'},
    {'name': 'N2S2.PNG', 'path': 'N2S2.PNG'},
    {'name': 'test_N2S2.png', 'path': 'test_N2S2.png'},
    {'name': 'N3S1.PNG', 'path': 'N3S1.PNG'},
    {'name': 'test_N3S1.png', 'path': 'test_N3S1.png'},
    {'name': 'word_main.xlsx', 'path': 'word_main.xlsx'},
    {'name': 'V1S1.PNG', 'path': 'V1S1.PNG'},
    {'name': 'test_V1S1.png', 'path': 'test_V1S1.png'},
    {'name': 'V1S2.PNG', 'path': 'V1S2.PNG'},
    {'name': 'test_V1S2.png', 'path': 'test_V1S2.png'},
    {'name': 'V2S1.PNG', 'path': 'V2S1.PNG'},
    {'name': 'test_V2S1.png', 'path': 'test_V2S1.png'},
    {'name': 'V3S1.PNG', 'path': 'V3S1.PNG'},
    {'name': 'test_V3S1.png', 'path': 'test_V3S1.png'},
    {'name': 'V3S2.PNG', 'path': 'V3S2.PNG'},
    {'name': 'test_V3S2.png', 'path': 'test_V3S2.png'},
    {'name': 'A1S1.PNG', 'path': 'A1S1.PNG'},
    {'name': 'test_A1S1.png', 'path': 'test_A1S1.png'},
    {'name': 'A1S2.PNG', 'path': 'A1S2.PNG'},
    {'name': 'test_A1S2.png', 'path': 'test_A1S2.png'},
    {'name': 'A2S1.PNG', 'path': 'A2S1.PNG'},
    {'name': 'test_A2S1.png', 'path': 'test_A2S1.png'},
    {'name': 'A2S2.PNG', 'path': 'A2S2.PNG'},
    {'name': 'test_A2S2.png', 'path': 'test_A2S2.png'},
    {'name': 'A3S1.PNG', 'path': 'A3S1.PNG'},
    {'name': 'test_A3S1.png', 'path': 'test_A3S1.png'},
    {'name': 'N1S1.PNG', 'path': 'N1S1.PNG'},
    {'name': 'test_N1S1.png', 'path': 'test_N1S1.png'},
    {'name': 'N1S2.PNG', 'path': 'N1S2.PNG'},
    {'name': 'test_N1S2.png', 'path': 'test_N1S2.png'},
    {'name': 'N2S1.PNG', 'path': 'N2S1.PNG'},
    {'name': 'test_N2S1.png', 'path': 'test_N2S1.png'},
    {'name': 'N2S2.PNG', 'path': 'N2S2.PNG'},
    {'name': 'test_N2S2.png', 'path': 'test_N2S2.png'},
    {'name': 'N3S1.PNG', 'path': 'N3S1.PNG'},
    {'name': 'test_N3S1.png', 'path': 'test_N3S1.png'},
    {'name': 'word_test.xlsx', 'path': 'word_test.xlsx'},
    {'name': 'test_V1S1.png', 'path': 'test_V1S1.png'},
    {'name': 'test_V1S2.png', 'path': 'test_V1S2.png'},
    {'name': 'test_V2S1.png', 'path': 'test_V2S1.png'},
    {'name': 'test_V3S1.png', 'path': 'test_V3S1.png'},
    {'name': 'test_V3S2.png', 'path': 'test_V3S2.png'},
    {'name': 'test_A1S1.png', 'path': 'test_A1S1.png'},
    {'name': 'test_A1S2.png', 'path': 'test_A1S2.png'},
    {'name': 'test_A2S1.png', 'path': 'test_A2S1.png'},
    {'name': 'test_A2S2.png', 'path': 'test_A2S2.png'},
    {'name': 'test_A3S1.png', 'path': 'test_A3S1.png'},
    {'name': 'test_N1S1.png', 'path': 'test_N1S1.png'},
    {'name': 'test_N1S2.png', 'path': 'test_N1S2.png'},
    {'name': 'test_N2S1.png', 'path': 'test_N2S1.png'},
    {'name': 'test_N2S2.png', 'path': 'test_N2S2.png'},
    {'name': 'test_N3S1.png', 'path': 'test_N3S1.png'},
    {'name': 'start_1.PNG', 'path': 'start_1.PNG'},
    {'name': 'start_2.PNG', 'path': 'start_2.PNG'},
    {'name': 'name_modified.PNG', 'path': 'name_modified.PNG'},
    {'name': 'mail_modified.PNG', 'path': 'mail_modified.PNG'},
    {'name': 'age_modified.PNG', 'path': 'age_modified.PNG'},
    {'name': 'sex_modified.PNG', 'path': 'sex_modified.PNG'},
    {'name': 'setumei_1.PNG', 'path': 'setumei_1.PNG'},
    {'name': 'setumei_2.PNG', 'path': 'setumei_2.PNG'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'gakusyu.PNG', 'path': 'gakusyu.PNG'},
    {'name': 'JOL_modified.PNG', 'path': 'JOL_modified.PNG'},
    {'name': 'keisan_modified.PNG', 'path': 'keisan_modified.PNG'},
    {'name': 'test_modified.PNG', 'path': 'test_modified.PNG'},
    {'name': 'start_URL.png', 'path': 'start_URL.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://forms.gle/zoCuUNGiAvAhxEa77', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var inst_1Clock;
var inst_1_img;
var inst_1_key;
var inst_2Clock;
var inst_2_img;
var inst_2_key;
var inst_3Clock;
var inst_3_img;
var name_cursor;
var name_box;
var name_key;
var name_click;
var inst_mailClock;
var inst_mail_img;
var mail_note;
var mail_box;
var mail_cursor;
var key_mail;
var inst_ageClock;
var inst_age_img;
var age_cursor;
var age_note;
var age_box;
var age_key;
var inst_sexClock;
var sex_text;
var inst_sex_img;
var sex_cursor;
var inst_setumei_1Clock;
var inst_setumei_img;
var key_inst_setumei_1;
var inst_setumei_2Clock;
var inst_setumei_img_2;
var key_inst_setumei_2;
var trialClock;
var learned_words;
var n_conditions;
var image_practice;
var text_demo;
var key_resp;
var text_instruction;
var inst_gakusyuClock;
var image_gakusyu;
var key_gakusyu;
var trial_mainClock;
var exp_timer;
var learned_words_main;
var n_conditions_main;
var time_limit;
var image_2;
var text_demo_2;
var key_resp_2;
var text_instruction_2;
var text_timer;
var time_msg;
var inst_JOLClock;
var image_JOL;
var key_JOL;
var jol_ratingClock;
var jol_slider;
var text_meaning;
var text_jol_instruction;
var scale_numbers;
var instruction_click;
var inst_keisanClock;
var image_keisan;
var key_keisan;
var Keisan_newClock;
var calc_mondai;
var calc_kaitou;
var enter_message;
var inst_testClock;
var image_test;
var key_test;
var testClock;
var input_box;
var test_img;
var test_instruction;
var test_key;
var inst_URLClock;
var image_URL;
var key_URL;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "inst_1"
  inst_1Clock = new util.Clock();
  inst_1_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_1_img', units : undefined, 
    image : 'start_1.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.9, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  inst_1_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst_2"
  inst_2Clock = new util.Clock();
  inst_2_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_2_img', units : undefined, 
    image : 'start_2.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.9, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  inst_2_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst_3"
  inst_3Clock = new util.Clock();
  inst_3_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_3_img', units : undefined, 
    image : 'name_modified.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  name_cursor = new visual.TextStim({
    win: psychoJS.window,
    name: 'name_cursor',
    text: '|',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((1.0000, 1.0000, 1.0000)),  opacity: undefined,
    depth: -1.0 
  });
  
  name_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'name_box',
    text: '',
    placeholder: 'ここへ入力してください...',
    font: 'Arial',
    pos: [0, (- 0.25)], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  name_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  name_click = new visual.TextStim({
    win: psychoJS.window,
    name: 'name_click',
    text: '|',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "inst_mail"
  inst_mailClock = new util.Clock();
  inst_mail_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_mail_img', units : undefined, 
    image : 'mail_modified.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9, 0.7],
    color : new util.Color('yellow'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mail_note = new visual.TextStim({
    win: psychoJS.window,
    name: 'mail_note',
    text: '＊ご注意＊テンキーは使えません',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mail_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'mail_box',
    text: '',
    placeholder: 'ここへ入力してください...',
    font: 'Arial',
    pos: [0, (- 0.25)], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  mail_cursor = new visual.TextStim({
    win: psychoJS.window,
    name: 'mail_cursor',
    text: '｜',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_mail = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst_age"
  inst_ageClock = new util.Clock();
  inst_age_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_age_img', units : undefined, 
    image : 'age_modified.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9, 0.7],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  age_cursor = new visual.TextStim({
    win: psychoJS.window,
    name: 'age_cursor',
    text: '｜',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  age_note = new visual.TextStim({
    win: psychoJS.window,
    name: 'age_note',
    text: '＊ご注意＊テンキーは使えません',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('yellow'),  opacity: undefined,
    depth: -2.0 
  });
  
  age_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'age_box',
    text: '',
    placeholder: 'ここへ入力してください...',
    font: 'Arial',
    pos: [0, (- 0.25)], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  age_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst_sex"
  inst_sexClock = new util.Clock();
  // Run 'Begin Experiment' code from sex_code
  sex_text = "";
  inst_sex_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_sex_img', units : undefined, 
    image : 'sex_modified.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9, 0.7],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  sex_cursor = new visual.TextStim({
    win: psychoJS.window,
    name: 'sex_cursor',
    text: '|',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "inst_setumei_1"
  inst_setumei_1Clock = new util.Clock();
  inst_setumei_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_setumei_img', units : undefined, 
    image : 'setumei_1.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9, 0.7],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_inst_setumei_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst_setumei_2"
  inst_setumei_2Clock = new util.Clock();
  inst_setumei_img_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inst_setumei_img_2', units : undefined, 
    image : 'setumei_2.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9, 0.7],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_inst_setumei_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  learned_words = [];
  n_conditions = 3;
  image_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_practice', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.7, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_demo',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instruction',
    text: '学習完了：E  のキーを押す\u3000\u3000\u3000\nもう一度学習する：スペースキーを押す\u3000\u3000\u3000\u3000\u3000\u3000\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "inst_gakusyu"
  inst_gakusyuClock = new util.Clock();
  image_gakusyu = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_gakusyu', units : undefined, 
    image : 'gakusyu.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9, 0.7],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_gakusyu = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_main"
  trial_mainClock = new util.Clock();
  // Run 'Begin Experiment' code from code_2
  exp_timer = null;
  learned_words_main = [];
  n_conditions_main = 15;
  // Run 'Begin Experiment' code from code_timer
  time_limit = 600;
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.7, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_demo_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_demo_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_instruction_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instruction_2',
    text: '学習完了：E  のキーを押す\u3000\u3000\u3000\nもう一度学習する：スペースバーを押す\u3000\u3000\u3000\u3000\u3000\u3000\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_timer = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_timer',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.7)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  time_msg = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_msg',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "inst_JOL"
  inst_JOLClock = new util.Clock();
  image_JOL = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_JOL', units : undefined, 
    image : 'JOL_modified.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9, 0.7],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_JOL = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "jol_rating"
  jol_ratingClock = new util.Clock();
  jol_slider = new visual.Slider({
    win: psychoJS.window, name: 'jol_slider',
    startValue: undefined,
    size: [0.9, 0.1], pos: [0, (- 0.2)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u5168\u304f\u81ea\u4fe1\u304c\u306a\u3044", "", "", "\u3069\u3061\u3089\u3068\u3082\u3044\u3048\u306a\u3044", "", "", "\u81ea\u4fe1\u304c\u3042\u308b"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('yellow'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text_meaning = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_meaning',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('yellow'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_jol_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_jol_instruction',
    text: '先ほど学習した英単語について\n後のテストで解答できると思う度合いを7段階で回答してください\n下記に日本語訳のみ表示されます',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  scale_numbers = new visual.TextStim({
    win: psychoJS.window,
    name: 'scale_numbers',
    text: '1       2       3       4       5       6      7',
    font: 'Meiryo',
    units: undefined, 
    pos: [0, (- 0.08)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  instruction_click = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_click',
    text: 'スケールにマウスをあててクリックしてください(赤い円が表示され次の単語に進みます）',
    font: 'Meiryo',
    units: undefined, 
    pos: [0, 0.05], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "inst_keisan"
  inst_keisanClock = new util.Clock();
  image_keisan = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_keisan', units : undefined, 
    image : 'keisan_modified.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9, 0.7],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_keisan = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Keisan_new"
  Keisan_newClock = new util.Clock();
  calc_mondai = new visual.TextStim({
    win: psychoJS.window,
    name: 'calc_mondai',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  calc_kaitou = new visual.TextStim({
    win: psychoJS.window,
    name: 'calc_kaitou',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('yellow'),  opacity: undefined,
    depth: -2.0 
  });
  
  enter_message = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_message',
    text: 'Enterキーで次の問題へ進んでください。\n入力ミスは修正できません。\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "inst_test"
  inst_testClock = new util.Clock();
  image_test = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_test', units : undefined, 
    image : 'test_modified.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9, 0.7],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  input_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'input_box',
    text: '',
    placeholder: 'ここへ入力してください...',
    font: 'Arial',
    pos: [0, (- 0.3)], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'yellow', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  test_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_img', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.2], size : [0.7, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  test_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'test_instruction',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  test_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "inst_URL"
  inst_URLClock = new util.Clock();
  image_URL = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_URL', units : undefined, 
    image : 'start_URL.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9, 0.7],
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_URL = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _inst_1_key_allKeys;
var inst_1Components;
function inst_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_1' ---
    t = 0;
    inst_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_1.started', globalClock.getTime());
    inst_1_key.keys = undefined;
    inst_1_key.rt = undefined;
    _inst_1_key_allKeys = [];
    // keep track of which components have finished
    inst_1Components = [];
    inst_1Components.push(inst_1_img);
    inst_1Components.push(inst_1_key);
    
    for (const thisComponent of inst_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_1' ---
    // get current time
    t = inst_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_1_img* updates
    if (t >= 0.0 && inst_1_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_1_img.tStart = t;  // (not accounting for frame time here)
      inst_1_img.frameNStart = frameN;  // exact frame index
      
      inst_1_img.setAutoDraw(true);
    }
    
    
    // *inst_1_key* updates
    if (t >= 0.0 && inst_1_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_1_key.tStart = t;  // (not accounting for frame time here)
      inst_1_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { inst_1_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { inst_1_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { inst_1_key.clearEvents(); });
    }
    
    if (inst_1_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = inst_1_key.getKeys({keyList: ['space'], waitRelease: false});
      _inst_1_key_allKeys = _inst_1_key_allKeys.concat(theseKeys);
      if (_inst_1_key_allKeys.length > 0) {
        inst_1_key.keys = _inst_1_key_allKeys[_inst_1_key_allKeys.length - 1].name;  // just the last key pressed
        inst_1_key.rt = _inst_1_key_allKeys[_inst_1_key_allKeys.length - 1].rt;
        inst_1_key.duration = _inst_1_key_allKeys[_inst_1_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_1' ---
    for (const thisComponent of inst_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(inst_1_key.corr, level);
    }
    psychoJS.experiment.addData('inst_1_key.keys', inst_1_key.keys);
    if (typeof inst_1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('inst_1_key.rt', inst_1_key.rt);
        psychoJS.experiment.addData('inst_1_key.duration', inst_1_key.duration);
        routineTimer.reset();
        }
    
    inst_1_key.stop();
    // the Routine "inst_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _inst_2_key_allKeys;
var inst_2Components;
function inst_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_2' ---
    t = 0;
    inst_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_2.started', globalClock.getTime());
    inst_2_key.keys = undefined;
    inst_2_key.rt = undefined;
    _inst_2_key_allKeys = [];
    // keep track of which components have finished
    inst_2Components = [];
    inst_2Components.push(inst_2_img);
    inst_2Components.push(inst_2_key);
    
    for (const thisComponent of inst_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_2' ---
    // get current time
    t = inst_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_2_img* updates
    if (t >= 0.0 && inst_2_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_2_img.tStart = t;  // (not accounting for frame time here)
      inst_2_img.frameNStart = frameN;  // exact frame index
      
      inst_2_img.setAutoDraw(true);
    }
    
    
    // *inst_2_key* updates
    if (t >= 0.0 && inst_2_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_2_key.tStart = t;  // (not accounting for frame time here)
      inst_2_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { inst_2_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { inst_2_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { inst_2_key.clearEvents(); });
    }
    
    if (inst_2_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = inst_2_key.getKeys({keyList: ['space'], waitRelease: false});
      _inst_2_key_allKeys = _inst_2_key_allKeys.concat(theseKeys);
      if (_inst_2_key_allKeys.length > 0) {
        inst_2_key.keys = _inst_2_key_allKeys[_inst_2_key_allKeys.length - 1].name;  // just the last key pressed
        inst_2_key.rt = _inst_2_key_allKeys[_inst_2_key_allKeys.length - 1].rt;
        inst_2_key.duration = _inst_2_key_allKeys[_inst_2_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_2' ---
    for (const thisComponent of inst_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(inst_2_key.corr, level);
    }
    psychoJS.experiment.addData('inst_2_key.keys', inst_2_key.keys);
    if (typeof inst_2_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('inst_2_key.rt', inst_2_key.rt);
        psychoJS.experiment.addData('inst_2_key.duration', inst_2_key.duration);
        routineTimer.reset();
        }
    
    inst_2_key.stop();
    // the Routine "inst_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _name_key_allKeys;
var inst_3Components;
function inst_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_3' ---
    t = 0;
    inst_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_3.started', globalClock.getTime());
    name_box.setText('');
    name_box.refresh();
    name_key.keys = undefined;
    name_key.rt = undefined;
    _name_key_allKeys = [];
    // keep track of which components have finished
    inst_3Components = [];
    inst_3Components.push(inst_3_img);
    inst_3Components.push(name_cursor);
    inst_3Components.push(name_box);
    inst_3Components.push(name_key);
    inst_3Components.push(name_click);
    
    for (const thisComponent of inst_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function inst_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_3' ---
    // get current time
    t = inst_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_3_img* updates
    if (t >= 0.0 && inst_3_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_3_img.tStart = t;  // (not accounting for frame time here)
      inst_3_img.frameNStart = frameN;  // exact frame index
      
      inst_3_img.setAutoDraw(true);
    }
    
    
    // *name_cursor* updates
    if (t >= 0.0 && name_cursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      name_cursor.tStart = t;  // (not accounting for frame time here)
      name_cursor.frameNStart = frameN;  // exact frame index
      
      name_cursor.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (name_cursor.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      name_cursor.setAutoDraw(false);
    }
    
    // *name_box* updates
    if (t >= 0.0 && name_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      name_box.tStart = t;  // (not accounting for frame time here)
      name_box.frameNStart = frameN;  // exact frame index
      
      name_box.setAutoDraw(true);
    }
    
    
    // *name_key* updates
    if (t >= 0.0 && name_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      name_key.tStart = t;  // (not accounting for frame time here)
      name_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { name_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { name_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { name_key.clearEvents(); });
    }
    
    if (name_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = name_key.getKeys({keyList: ['return'], waitRelease: false});
      _name_key_allKeys = _name_key_allKeys.concat(theseKeys);
      if (_name_key_allKeys.length > 0) {
        name_key.keys = _name_key_allKeys[_name_key_allKeys.length - 1].name;  // just the last key pressed
        name_key.rt = _name_key_allKeys[_name_key_allKeys.length - 1].rt;
        name_key.duration = _name_key_allKeys[_name_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *name_click* updates
    if (t >= 0.0 && name_click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      name_click.tStart = t;  // (not accounting for frame time here)
      name_click.frameNStart = frameN;  // exact frame index
      
      name_click.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (name_click.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      name_click.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_3' ---
    for (const thisComponent of inst_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_3.stopped', globalClock.getTime());
    psychoJS.experiment.addData('name_box.text',name_box.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(name_key.corr, level);
    }
    psychoJS.experiment.addData('name_key.keys', name_key.keys);
    if (typeof name_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('name_key.rt', name_key.rt);
        psychoJS.experiment.addData('name_key.duration', name_key.duration);
        routineTimer.reset();
        }
    
    name_key.stop();
    // the Routine "inst_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_mail_allKeys;
var inst_mailComponents;
function inst_mailRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_mail' ---
    t = 0;
    inst_mailClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_mail.started', globalClock.getTime());
    mail_box.setText('');
    mail_box.refresh();
    key_mail.keys = undefined;
    key_mail.rt = undefined;
    _key_mail_allKeys = [];
    // keep track of which components have finished
    inst_mailComponents = [];
    inst_mailComponents.push(inst_mail_img);
    inst_mailComponents.push(mail_note);
    inst_mailComponents.push(mail_box);
    inst_mailComponents.push(mail_cursor);
    inst_mailComponents.push(key_mail);
    
    for (const thisComponent of inst_mailComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_mailRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_mail' ---
    // get current time
    t = inst_mailClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_mail_img* updates
    if (t >= 0.0 && inst_mail_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_mail_img.tStart = t;  // (not accounting for frame time here)
      inst_mail_img.frameNStart = frameN;  // exact frame index
      
      inst_mail_img.setAutoDraw(true);
    }
    
    
    if (mail_note.status === PsychoJS.Status.STARTED){ // only update if being drawn
      mail_note.setColor(new util.Color('yellow'), false);
    }
    
    // *mail_note* updates
    if (t >= 0.0 && mail_note.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mail_note.tStart = t;  // (not accounting for frame time here)
      mail_note.frameNStart = frameN;  // exact frame index
      
      mail_note.setAutoDraw(true);
    }
    
    
    // *mail_box* updates
    if (t >= 0.0 && mail_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mail_box.tStart = t;  // (not accounting for frame time here)
      mail_box.frameNStart = frameN;  // exact frame index
      
      mail_box.setAutoDraw(true);
    }
    
    
    if (mail_cursor.status === PsychoJS.Status.STARTED){ // only update if being drawn
      mail_cursor.setColor(new util.Color('white'), false);
    }
    
    // *mail_cursor* updates
    if (t >= 0.0 && mail_cursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mail_cursor.tStart = t;  // (not accounting for frame time here)
      mail_cursor.frameNStart = frameN;  // exact frame index
      
      mail_cursor.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mail_cursor.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mail_cursor.setAutoDraw(false);
    }
    
    // *key_mail* updates
    if (t >= 0.0 && key_mail.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_mail.tStart = t;  // (not accounting for frame time here)
      key_mail.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_mail.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_mail.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_mail.clearEvents(); });
    }
    
    if (key_mail.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_mail.getKeys({keyList: ['return'], waitRelease: false});
      _key_mail_allKeys = _key_mail_allKeys.concat(theseKeys);
      if (_key_mail_allKeys.length > 0) {
        key_mail.keys = _key_mail_allKeys[_key_mail_allKeys.length - 1].name;  // just the last key pressed
        key_mail.rt = _key_mail_allKeys[_key_mail_allKeys.length - 1].rt;
        key_mail.duration = _key_mail_allKeys[_key_mail_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_mailComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_mailRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_mail' ---
    for (const thisComponent of inst_mailComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_mail.stopped', globalClock.getTime());
    psychoJS.experiment.addData('mail_box.text',mail_box.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_mail.corr, level);
    }
    psychoJS.experiment.addData('key_mail.keys', key_mail.keys);
    if (typeof key_mail.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_mail.rt', key_mail.rt);
        psychoJS.experiment.addData('key_mail.duration', key_mail.duration);
        routineTimer.reset();
        }
    
    key_mail.stop();
    // the Routine "inst_mail" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _age_key_allKeys;
var inst_ageComponents;
function inst_ageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_age' ---
    t = 0;
    inst_ageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_age.started', globalClock.getTime());
    age_box.setText('');
    age_box.refresh();
    age_key.keys = undefined;
    age_key.rt = undefined;
    _age_key_allKeys = [];
    // keep track of which components have finished
    inst_ageComponents = [];
    inst_ageComponents.push(inst_age_img);
    inst_ageComponents.push(age_cursor);
    inst_ageComponents.push(age_note);
    inst_ageComponents.push(age_box);
    inst_ageComponents.push(age_key);
    
    for (const thisComponent of inst_ageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_ageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_age' ---
    // get current time
    t = inst_ageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_age_img* updates
    if (t >= 0.0 && inst_age_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_age_img.tStart = t;  // (not accounting for frame time here)
      inst_age_img.frameNStart = frameN;  // exact frame index
      
      inst_age_img.setAutoDraw(true);
    }
    
    
    if (age_cursor.status === PsychoJS.Status.STARTED){ // only update if being drawn
      age_cursor.setColor(new util.Color('white'), false);
    }
    
    // *age_cursor* updates
    if (t >= 0.0 && age_cursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_cursor.tStart = t;  // (not accounting for frame time here)
      age_cursor.frameNStart = frameN;  // exact frame index
      
      age_cursor.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (age_cursor.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      age_cursor.setAutoDraw(false);
    }
    
    // *age_note* updates
    if (t >= 0.0 && age_note.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_note.tStart = t;  // (not accounting for frame time here)
      age_note.frameNStart = frameN;  // exact frame index
      
      age_note.setAutoDraw(true);
    }
    
    
    // *age_box* updates
    if (t >= 0.0 && age_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_box.tStart = t;  // (not accounting for frame time here)
      age_box.frameNStart = frameN;  // exact frame index
      
      age_box.setAutoDraw(true);
    }
    
    
    // *age_key* updates
    if (t >= 0.0 && age_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_key.tStart = t;  // (not accounting for frame time here)
      age_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { age_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { age_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { age_key.clearEvents(); });
    }
    
    if (age_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = age_key.getKeys({keyList: ['return'], waitRelease: false});
      _age_key_allKeys = _age_key_allKeys.concat(theseKeys);
      if (_age_key_allKeys.length > 0) {
        age_key.keys = _age_key_allKeys[_age_key_allKeys.length - 1].name;  // just the last key pressed
        age_key.rt = _age_key_allKeys[_age_key_allKeys.length - 1].rt;
        age_key.duration = _age_key_allKeys[_age_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_ageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_ageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_age' ---
    for (const thisComponent of inst_ageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_age.stopped', globalClock.getTime());
    psychoJS.experiment.addData('age_box.text',age_box.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(age_key.corr, level);
    }
    psychoJS.experiment.addData('age_key.keys', age_key.keys);
    if (typeof age_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('age_key.rt', age_key.rt);
        psychoJS.experiment.addData('age_key.duration', age_key.duration);
        routineTimer.reset();
        }
    
    age_key.stop();
    // the Routine "inst_age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var inst_sexComponents;
function inst_sexRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_sex' ---
    t = 0;
    inst_sexClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_sex.started', globalClock.getTime());
    // Run 'Begin Routine' code from sex_code
    sex_text = "";
    psychoJS.eventManager.clearEvents();
    // keep track of which components have finished
    inst_sexComponents = [];
    inst_sexComponents.push(inst_sex_img);
    inst_sexComponents.push(sex_cursor);
    
    for (const thisComponent of inst_sexComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_sexRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_sex' ---
    // get current time
    t = inst_sexClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from sex_code
    let keys = psychoJS.eventManager.getKeys();
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (key === 'return' && sex_text.length > 0 && t > 0.5) {
            continueRoutine = false;
        } else if (key === 'backspace') {
            sex_text = sex_text.slice(0, -1);
        } else if (['m', 'f', 'y'].includes(key)) {
            sex_text = key;
        }
    }
    
    if (Math.floor(t * 2) % 2 === 0) {
        sex_cursor.setText(sex_text + '|');
    } else {
        sex_cursor.setText(sex_text + ' ');
    }
    
    // *inst_sex_img* updates
    if (t >= 0.0 && inst_sex_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_sex_img.tStart = t;  // (not accounting for frame time here)
      inst_sex_img.frameNStart = frameN;  // exact frame index
      
      inst_sex_img.setAutoDraw(true);
    }
    
    
    if (sex_cursor.status === PsychoJS.Status.STARTED){ // only update if being drawn
      sex_cursor.setColor(new util.Color([1,1,1]), false);
    }
    
    // *sex_cursor* updates
    if (t >= 0.0 && sex_cursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sex_cursor.tStart = t;  // (not accounting for frame time here)
      sex_cursor.frameNStart = frameN;  // exact frame index
      
      sex_cursor.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_sexComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_sexRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_sex' ---
    for (const thisComponent of inst_sexComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_sex.stopped', globalClock.getTime());
    // Run 'End Routine' code from sex_code
    if (sex_text === 'm') {
        psychoJS.experiment.addData('participant_sex', '男性');
    } else if (sex_text === 'f') {
        psychoJS.experiment.addData('participant_sex', '女性');
    } else if (sex_text === 'y') {
        psychoJS.experiment.addData('participant_sex', '回答しない');
    }
    // the Routine "inst_sex" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_inst_setumei_1_allKeys;
var inst_setumei_1Components;
function inst_setumei_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_setumei_1' ---
    t = 0;
    inst_setumei_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_setumei_1.started', globalClock.getTime());
    key_inst_setumei_1.keys = undefined;
    key_inst_setumei_1.rt = undefined;
    _key_inst_setumei_1_allKeys = [];
    // keep track of which components have finished
    inst_setumei_1Components = [];
    inst_setumei_1Components.push(inst_setumei_img);
    inst_setumei_1Components.push(key_inst_setumei_1);
    
    for (const thisComponent of inst_setumei_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_setumei_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_setumei_1' ---
    // get current time
    t = inst_setumei_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_setumei_img* updates
    if (t >= 0.0 && inst_setumei_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_setumei_img.tStart = t;  // (not accounting for frame time here)
      inst_setumei_img.frameNStart = frameN;  // exact frame index
      
      inst_setumei_img.setAutoDraw(true);
    }
    
    
    // *key_inst_setumei_1* updates
    if (t >= 0.0 && key_inst_setumei_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_inst_setumei_1.tStart = t;  // (not accounting for frame time here)
      key_inst_setumei_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_inst_setumei_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_inst_setumei_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_inst_setumei_1.clearEvents(); });
    }
    
    if (key_inst_setumei_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_inst_setumei_1.getKeys({keyList: ['space'], waitRelease: false});
      _key_inst_setumei_1_allKeys = _key_inst_setumei_1_allKeys.concat(theseKeys);
      if (_key_inst_setumei_1_allKeys.length > 0) {
        key_inst_setumei_1.keys = _key_inst_setumei_1_allKeys[_key_inst_setumei_1_allKeys.length - 1].name;  // just the last key pressed
        key_inst_setumei_1.rt = _key_inst_setumei_1_allKeys[_key_inst_setumei_1_allKeys.length - 1].rt;
        key_inst_setumei_1.duration = _key_inst_setumei_1_allKeys[_key_inst_setumei_1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_setumei_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_setumei_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_setumei_1' ---
    for (const thisComponent of inst_setumei_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_setumei_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_inst_setumei_1.corr, level);
    }
    psychoJS.experiment.addData('key_inst_setumei_1.keys', key_inst_setumei_1.keys);
    if (typeof key_inst_setumei_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_inst_setumei_1.rt', key_inst_setumei_1.rt);
        psychoJS.experiment.addData('key_inst_setumei_1.duration', key_inst_setumei_1.duration);
        routineTimer.reset();
        }
    
    key_inst_setumei_1.stop();
    // the Routine "inst_setumei_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_inst_setumei_2_allKeys;
var inst_setumei_2Components;
function inst_setumei_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_setumei_2' ---
    t = 0;
    inst_setumei_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_setumei_2.started', globalClock.getTime());
    key_inst_setumei_2.keys = undefined;
    key_inst_setumei_2.rt = undefined;
    _key_inst_setumei_2_allKeys = [];
    // keep track of which components have finished
    inst_setumei_2Components = [];
    inst_setumei_2Components.push(inst_setumei_img_2);
    inst_setumei_2Components.push(key_inst_setumei_2);
    
    for (const thisComponent of inst_setumei_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_setumei_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_setumei_2' ---
    // get current time
    t = inst_setumei_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_setumei_img_2* updates
    if (t >= 0.0 && inst_setumei_img_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_setumei_img_2.tStart = t;  // (not accounting for frame time here)
      inst_setumei_img_2.frameNStart = frameN;  // exact frame index
      
      inst_setumei_img_2.setAutoDraw(true);
    }
    
    
    // *key_inst_setumei_2* updates
    if (t >= 0.0 && key_inst_setumei_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_inst_setumei_2.tStart = t;  // (not accounting for frame time here)
      key_inst_setumei_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_inst_setumei_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_inst_setumei_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_inst_setumei_2.clearEvents(); });
    }
    
    if (key_inst_setumei_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_inst_setumei_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_inst_setumei_2_allKeys = _key_inst_setumei_2_allKeys.concat(theseKeys);
      if (_key_inst_setumei_2_allKeys.length > 0) {
        key_inst_setumei_2.keys = _key_inst_setumei_2_allKeys[_key_inst_setumei_2_allKeys.length - 1].name;  // just the last key pressed
        key_inst_setumei_2.rt = _key_inst_setumei_2_allKeys[_key_inst_setumei_2_allKeys.length - 1].rt;
        key_inst_setumei_2.duration = _key_inst_setumei_2_allKeys[_key_inst_setumei_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_setumei_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_setumei_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_setumei_2' ---
    for (const thisComponent of inst_setumei_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_setumei_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_inst_setumei_2.corr, level);
    }
    psychoJS.experiment.addData('key_inst_setumei_2.keys', key_inst_setumei_2.keys);
    if (typeof key_inst_setumei_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_inst_setumei_2.rt', key_inst_setumei_2.rt);
        psychoJS.experiment.addData('key_inst_setumei_2.duration', key_inst_setumei_2.duration);
        routineTimer.reset();
        }
    
    key_inst_setumei_2.stop();
    // the Routine "inst_setumei_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'word_practice.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 70, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'word_main.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(trial_mainRoutineBegin(snapshot));
      trials_2LoopScheduler.add(trial_mainRoutineEachFrame());
      trials_2LoopScheduler.add(trial_mainRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var jol_loop;
function jol_loopLoopBegin(jol_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    jol_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'word_main.xlsx',
      seed: undefined, name: 'jol_loop'
    });
    psychoJS.experiment.addLoop(jol_loop); // add the loop to the experiment
    currentLoop = jol_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisJol_loop of jol_loop) {
      snapshot = jol_loop.getSnapshot();
      jol_loopLoopScheduler.add(importConditions(snapshot));
      jol_loopLoopScheduler.add(jol_ratingRoutineBegin(snapshot));
      jol_loopLoopScheduler.add(jol_ratingRoutineEachFrame());
      jol_loopLoopScheduler.add(jol_ratingRoutineEnd(snapshot));
      jol_loopLoopScheduler.add(jol_loopLoopEndIteration(jol_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function jol_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(jol_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function jol_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var test_trials;
function test_trialsLoopBegin(test_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'word_test.xlsx',
      seed: undefined, name: 'test_trials'
    });
    psychoJS.experiment.addLoop(test_trials); // add the loop to the experiment
    currentLoop = test_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_trial of test_trials) {
      snapshot = test_trials.getSnapshot();
      test_trialsLoopScheduler.add(importConditions(snapshot));
      test_trialsLoopScheduler.add(testRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(testRoutineEachFrame());
      test_trialsLoopScheduler.add(testRoutineEnd(snapshot));
      test_trialsLoopScheduler.add(test_trialsLoopEndIteration(test_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function test_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    if (learned_words.includes(word_id)) {
        continueRoutine = false;
    }
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image_practice);
    trialComponents.push(text_demo);
    trialComponents.push(key_resp);
    trialComponents.push(text_instruction);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    if (image_practice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_practice.setImage(image_file, false);
    }
    
    // *image_practice* updates
    if (t >= 0.0 && image_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_practice.tStart = t;  // (not accounting for frame time here)
      image_practice.frameNStart = frameN;  // exact frame index
      
      image_practice.setAutoDraw(true);
    }
    
    
    if (text_demo.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_demo.setText('', false);
    }
    
    // *text_demo* updates
    if (t >= 0.0 && text_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_demo.tStart = t;  // (not accounting for frame time here)
      text_demo.frameNStart = frameN;  // exact frame index
      
      text_demo.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['e', 'space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_instruction* updates
    if (t >= 0.0 && text_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instruction.tStart = t;  // (not accounting for frame time here)
      text_instruction.frameNStart = frameN;  // exact frame index
      
      text_instruction.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    if (key_resp.keys === 'e') {
        if (!learned_words.includes(word_id)) {
            learned_words.push(word_id);
        }
    }
    
    if (learned_words.length >= n_conditions) {
        trials.finished = true;
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_gakusyu_allKeys;
var inst_gakusyuComponents;
function inst_gakusyuRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_gakusyu' ---
    t = 0;
    inst_gakusyuClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_gakusyu.started', globalClock.getTime());
    key_gakusyu.keys = undefined;
    key_gakusyu.rt = undefined;
    _key_gakusyu_allKeys = [];
    // keep track of which components have finished
    inst_gakusyuComponents = [];
    inst_gakusyuComponents.push(image_gakusyu);
    inst_gakusyuComponents.push(key_gakusyu);
    
    for (const thisComponent of inst_gakusyuComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_gakusyuRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_gakusyu' ---
    // get current time
    t = inst_gakusyuClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_gakusyu* updates
    if (t >= 0.0 && image_gakusyu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_gakusyu.tStart = t;  // (not accounting for frame time here)
      image_gakusyu.frameNStart = frameN;  // exact frame index
      
      image_gakusyu.setAutoDraw(true);
    }
    
    
    // *key_gakusyu* updates
    if (t >= 0.0 && key_gakusyu.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_gakusyu.tStart = t;  // (not accounting for frame time here)
      key_gakusyu.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_gakusyu.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_gakusyu.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_gakusyu.clearEvents(); });
    }
    
    if (key_gakusyu.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_gakusyu.getKeys({keyList: ['space'], waitRelease: false});
      _key_gakusyu_allKeys = _key_gakusyu_allKeys.concat(theseKeys);
      if (_key_gakusyu_allKeys.length > 0) {
        key_gakusyu.keys = _key_gakusyu_allKeys[_key_gakusyu_allKeys.length - 1].name;  // just the last key pressed
        key_gakusyu.rt = _key_gakusyu_allKeys[_key_gakusyu_allKeys.length - 1].rt;
        key_gakusyu.duration = _key_gakusyu_allKeys[_key_gakusyu_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_gakusyuComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_gakusyuRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_gakusyu' ---
    for (const thisComponent of inst_gakusyuComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_gakusyu.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_gakusyu.corr, level);
    }
    psychoJS.experiment.addData('key_gakusyu.keys', key_gakusyu.keys);
    if (typeof key_gakusyu.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_gakusyu.rt', key_gakusyu.rt);
        psychoJS.experiment.addData('key_gakusyu.duration', key_gakusyu.duration);
        routineTimer.reset();
        }
    
    key_gakusyu.stop();
    // the Routine "inst_gakusyu" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var trial_mainComponents;
function trial_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_main' ---
    t = 0;
    trial_mainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial_main.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_2
    if (exp_timer === null) {
        exp_timer = new util.Clock();
    }
    
    if (learned_words_main.includes(word)) {
        continueRoutine = false;
    }
    // Run 'Begin Routine' code from code_timer
    if (trials_2.start_time === undefined) {
        trials_2.start_time = globalClock.getTime();
    }
    image_2.setImage(image_file);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    trial_mainComponents = [];
    trial_mainComponents.push(image_2);
    trial_mainComponents.push(text_demo_2);
    trial_mainComponents.push(key_resp_2);
    trial_mainComponents.push(text_instruction_2);
    trial_mainComponents.push(text_timer);
    trial_mainComponents.push(time_msg);
    
    for (const thisComponent of trial_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var elapsed;
var remaining;
var time_message;
function trial_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_main' ---
    // get current time
    t = trial_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_2
    let elapsed = exp_timer.getTime();
    
    if (elapsed >= 600) {
        continueRoutine = false;
        trials_2.finished = true;
    }
    
    if (elapsed >= 300 && elapsed < 305) {
        time_msg.setText('5分経過しました');
    } else if (elapsed >= 480 && elapsed < 485) {
        time_msg.setText('8分経過しました');
    } else {
        time_msg.setText('');
    }
    // Run 'Each Frame' code from code_timer
    elapsed = globalClock.getTime() - trials_2.start_time;
    remaining = time_limit - elapsed;
    
    if (298 < elapsed && elapsed < 302) {
        time_message = "5分経過しました。残り5分です。";
    } else if (538 < elapsed && elapsed < 542) {
        time_message = "残り時間あと1分です。";
    } else {
        time_message = "";
    }
    
    if (remaining <= 0) {
        trials_2.finished = true;
        continueRoutine = false;
    }
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    if (text_demo_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_demo_2.setText('', false);
    }
    
    // *text_demo_2* updates
    if (t >= 0.0 && text_demo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_demo_2.tStart = t;  // (not accounting for frame time here)
      text_demo_2.frameNStart = frameN;  // exact frame index
      
      text_demo_2.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['e', 'space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_instruction_2* updates
    if (t >= 0.0 && text_instruction_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instruction_2.tStart = t;  // (not accounting for frame time here)
      text_instruction_2.frameNStart = frameN;  // exact frame index
      
      text_instruction_2.setAutoDraw(true);
    }
    
    
    if (text_timer.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_timer.setText(time_message, false);
    }
    
    // *text_timer* updates
    if (t >= 0.0 && text_timer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_timer.tStart = t;  // (not accounting for frame time here)
      text_timer.frameNStart = frameN;  // exact frame index
      
      text_timer.setAutoDraw(true);
    }
    
    
    if (time_msg.status === PsychoJS.Status.STARTED){ // only update if being drawn
      time_msg.setColor(new util.Color('yellow'), false);
    }
    
    // *time_msg* updates
    if (t >= 0.0 && time_msg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_msg.tStart = t;  // (not accounting for frame time here)
      time_msg.frameNStart = frameN;  // exact frame index
      
      time_msg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_main' ---
    for (const thisComponent of trial_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_main.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_2
    if (key_resp_2.keys === 'e') {
        if (!learned_words_main.includes(word)) {
            learned_words_main.push(word);
        }
    }
    
    if (learned_words_main.length >= n_conditions_main) {
        trials_2.finished = true;
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "trial_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_JOL_allKeys;
var inst_JOLComponents;
function inst_JOLRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_JOL' ---
    t = 0;
    inst_JOLClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_JOL.started', globalClock.getTime());
    key_JOL.keys = undefined;
    key_JOL.rt = undefined;
    _key_JOL_allKeys = [];
    // keep track of which components have finished
    inst_JOLComponents = [];
    inst_JOLComponents.push(image_JOL);
    inst_JOLComponents.push(key_JOL);
    
    for (const thisComponent of inst_JOLComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_JOLRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_JOL' ---
    // get current time
    t = inst_JOLClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_JOL* updates
    if (t >= 0.0 && image_JOL.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_JOL.tStart = t;  // (not accounting for frame time here)
      image_JOL.frameNStart = frameN;  // exact frame index
      
      image_JOL.setAutoDraw(true);
    }
    
    
    // *key_JOL* updates
    if (t >= 0.0 && key_JOL.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_JOL.tStart = t;  // (not accounting for frame time here)
      key_JOL.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_JOL.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_JOL.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_JOL.clearEvents(); });
    }
    
    if (key_JOL.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_JOL.getKeys({keyList: ['space'], waitRelease: false});
      _key_JOL_allKeys = _key_JOL_allKeys.concat(theseKeys);
      if (_key_JOL_allKeys.length > 0) {
        key_JOL.keys = _key_JOL_allKeys[_key_JOL_allKeys.length - 1].name;  // just the last key pressed
        key_JOL.rt = _key_JOL_allKeys[_key_JOL_allKeys.length - 1].rt;
        key_JOL.duration = _key_JOL_allKeys[_key_JOL_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_JOLComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_JOLRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_JOL' ---
    for (const thisComponent of inst_JOLComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_JOL.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_JOL.corr, level);
    }
    psychoJS.experiment.addData('key_JOL.keys', key_JOL.keys);
    if (typeof key_JOL.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_JOL.rt', key_JOL.rt);
        psychoJS.experiment.addData('key_JOL.duration', key_JOL.duration);
        routineTimer.reset();
        }
    
    key_JOL.stop();
    // the Routine "inst_JOL" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var jol_ratingComponents;
function jol_ratingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'jol_rating' ---
    t = 0;
    jol_ratingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('jol_rating.started', globalClock.getTime());
    jol_slider.reset()
    // keep track of which components have finished
    jol_ratingComponents = [];
    jol_ratingComponents.push(jol_slider);
    jol_ratingComponents.push(text_meaning);
    jol_ratingComponents.push(text_jol_instruction);
    jol_ratingComponents.push(scale_numbers);
    jol_ratingComponents.push(instruction_click);
    
    for (const thisComponent of jol_ratingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function jol_ratingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'jol_rating' ---
    // get current time
    t = jol_ratingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *jol_slider* updates
    if (t >= 0.0 && jol_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      jol_slider.tStart = t;  // (not accounting for frame time here)
      jol_slider.frameNStart = frameN;  // exact frame index
      
      jol_slider.setAutoDraw(true);
    }
    
    
    // Check jol_slider for response to end Routine
    if (jol_slider.getRating() !== undefined && jol_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    if (text_meaning.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_meaning.setText(meaning, false);
    }
    
    // *text_meaning* updates
    if (t >= 0.0 && text_meaning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_meaning.tStart = t;  // (not accounting for frame time here)
      text_meaning.frameNStart = frameN;  // exact frame index
      
      text_meaning.setAutoDraw(true);
    }
    
    
    // *text_jol_instruction* updates
    if (t >= 0.0 && text_jol_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_jol_instruction.tStart = t;  // (not accounting for frame time here)
      text_jol_instruction.frameNStart = frameN;  // exact frame index
      
      text_jol_instruction.setAutoDraw(true);
    }
    
    
    // *scale_numbers* updates
    if (t >= 0.0 && scale_numbers.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scale_numbers.tStart = t;  // (not accounting for frame time here)
      scale_numbers.frameNStart = frameN;  // exact frame index
      
      scale_numbers.setAutoDraw(true);
    }
    
    
    // *instruction_click* updates
    if (t >= 0.0 && instruction_click.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_click.tStart = t;  // (not accounting for frame time here)
      instruction_click.frameNStart = frameN;  // exact frame index
      
      instruction_click.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of jol_ratingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function jol_ratingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'jol_rating' ---
    for (const thisComponent of jol_ratingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('jol_rating.stopped', globalClock.getTime());
    psychoJS.experiment.addData('jol_slider.response', jol_slider.getRating());
    psychoJS.experiment.addData('jol_slider.rt', jol_slider.getRT());
    // the Routine "jol_rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_keisan_allKeys;
var inst_keisanComponents;
function inst_keisanRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_keisan' ---
    t = 0;
    inst_keisanClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_keisan.started', globalClock.getTime());
    key_keisan.keys = undefined;
    key_keisan.rt = undefined;
    _key_keisan_allKeys = [];
    // keep track of which components have finished
    inst_keisanComponents = [];
    inst_keisanComponents.push(image_keisan);
    inst_keisanComponents.push(key_keisan);
    
    for (const thisComponent of inst_keisanComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_keisanRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_keisan' ---
    // get current time
    t = inst_keisanClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_keisan* updates
    if (t >= 0.0 && image_keisan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_keisan.tStart = t;  // (not accounting for frame time here)
      image_keisan.frameNStart = frameN;  // exact frame index
      
      image_keisan.setAutoDraw(true);
    }
    
    
    // *key_keisan* updates
    if (t >= 0.0 && key_keisan.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_keisan.tStart = t;  // (not accounting for frame time here)
      key_keisan.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_keisan.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_keisan.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_keisan.clearEvents(); });
    }
    
    if (key_keisan.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_keisan.getKeys({keyList: ['space'], waitRelease: false});
      _key_keisan_allKeys = _key_keisan_allKeys.concat(theseKeys);
      if (_key_keisan_allKeys.length > 0) {
        key_keisan.keys = _key_keisan_allKeys[_key_keisan_allKeys.length - 1].name;  // just the last key pressed
        key_keisan.rt = _key_keisan_allKeys[_key_keisan_allKeys.length - 1].rt;
        key_keisan.duration = _key_keisan_allKeys[_key_keisan_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_keisanComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_keisanRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_keisan' ---
    for (const thisComponent of inst_keisanComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_keisan.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_keisan.corr, level);
    }
    psychoJS.experiment.addData('key_keisan.keys', key_keisan.keys);
    if (typeof key_keisan.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_keisan.rt', key_keisan.rt);
        psychoJS.experiment.addData('key_keisan.duration', key_keisan.duration);
        routineTimer.reset();
        }
    
    key_keisan.stop();
    // the Routine "inst_keisan" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var num1;
var num2;
var problem_text;
var answer_text;
var Keisan_newComponents;
function Keisan_newRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Keisan_new' ---
    t = 0;
    Keisan_newClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Keisan_new.started', globalClock.getTime());
    // Run 'Begin Routine' code from calc_logic
    // 最初の問題を作る
    num1 = Math.floor(Math.random() * 80) + 20;  // 20〜99
    num2 = Math.floor(Math.random() * (num1 - 10)) + 10;  // 10〜num1-1
    problem_text = `${num1} - ${num2} = ?`;
    answer_text = "";
    // keep track of which components have finished
    Keisan_newComponents = [];
    Keisan_newComponents.push(calc_mondai);
    Keisan_newComponents.push(calc_kaitou);
    Keisan_newComponents.push(enter_message);
    
    for (const thisComponent of Keisan_newComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Keisan_newRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Keisan_new' ---
    // get current time
    t = Keisan_newClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > 60.0) {
        continueRoutine = false
    }
    // Run 'Each Frame' code from calc_logic
    // キー入力（Pavloviaで最も確実な方法）
    let keys = psychoJS.eventManager.getKeys({
      keyList: ['0','1','2','3','4','5','6','7','8','9','return','backspace']
    });
    
    // 入力処理
    for (let key of keys) {
      if (key === 'backspace') {
        answer_text = answer_text.slice(0, -1);
    
      } else if (key === 'return') {
        // 新しい問題を作る
        num1 = Math.floor(Math.random() * 80) + 20;          // 20〜99
        num2 = Math.floor(Math.random() * (num1 - 10)) + 10; // 10〜(num1-1)
        problem_text = `${num1} - ${num2} = ?`;
        answer_text = '';
    
      } else {
        // 数字キー
        answer_text += key;
      }
    }
    
    // 60秒で終了（60秒間で何問でも解く）
    if (t >= 60) {
      continueRoutine = false;
    }
    
    
    if (calc_mondai.status === PsychoJS.Status.STARTED){ // only update if being drawn
      calc_mondai.setText(problem_text, false);
      calc_mondai.setFont('Meiryo', false);
    }
    
    // *calc_mondai* updates
    if (t >= 0.0 && calc_mondai.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calc_mondai.tStart = t;  // (not accounting for frame time here)
      calc_mondai.frameNStart = frameN;  // exact frame index
      
      calc_mondai.setAutoDraw(true);
    }
    
    
    if (calc_kaitou.status === PsychoJS.Status.STARTED){ // only update if being drawn
      calc_kaitou.setText((answer_text + "|"), false);
    }
    
    // *calc_kaitou* updates
    if (t >= 0.0 && calc_kaitou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calc_kaitou.tStart = t;  // (not accounting for frame time here)
      calc_kaitou.frameNStart = frameN;  // exact frame index
      
      calc_kaitou.setAutoDraw(true);
    }
    
    
    // *enter_message* updates
    if (t >= 0.0 && enter_message.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_message.tStart = t;  // (not accounting for frame time here)
      enter_message.frameNStart = frameN;  // exact frame index
      
      enter_message.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Keisan_newComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Keisan_newRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Keisan_new' ---
    for (const thisComponent of Keisan_newComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Keisan_new.stopped', globalClock.getTime());
    // the Routine "Keisan_new" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_test_allKeys;
var inst_testComponents;
function inst_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_test' ---
    t = 0;
    inst_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_test.started', globalClock.getTime());
    key_test.keys = undefined;
    key_test.rt = undefined;
    _key_test_allKeys = [];
    // keep track of which components have finished
    inst_testComponents = [];
    inst_testComponents.push(image_test);
    inst_testComponents.push(key_test);
    
    for (const thisComponent of inst_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_test' ---
    // get current time
    t = inst_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_test* updates
    if (t >= 0.0 && image_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_test.tStart = t;  // (not accounting for frame time here)
      image_test.frameNStart = frameN;  // exact frame index
      
      image_test.setAutoDraw(true);
    }
    
    
    // *key_test* updates
    if (t >= 0.0 && key_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_test.tStart = t;  // (not accounting for frame time here)
      key_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_test.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_test.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_test.clearEvents(); });
    }
    
    if (key_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_test.getKeys({keyList: ['space'], waitRelease: false});
      _key_test_allKeys = _key_test_allKeys.concat(theseKeys);
      if (_key_test_allKeys.length > 0) {
        key_test.keys = _key_test_allKeys[_key_test_allKeys.length - 1].name;  // just the last key pressed
        key_test.rt = _key_test_allKeys[_key_test_allKeys.length - 1].rt;
        key_test.duration = _key_test_allKeys[_key_test_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_test' ---
    for (const thisComponent of inst_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_test.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_test.corr, level);
    }
    psychoJS.experiment.addData('key_test.keys', key_test.keys);
    if (typeof key_test.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_test.rt', key_test.rt);
        psychoJS.experiment.addData('key_test.duration', key_test.duration);
        routineTimer.reset();
        }
    
    key_test.stop();
    // the Routine "inst_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _test_key_allKeys;
var testComponents;
function testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test' ---
    t = 0;
    testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('test.started', globalClock.getTime());
    input_box.setText('');
    input_box.refresh();
    input_box.setText('');
    test_img.setImage(test_image);
    test_key.keys = undefined;
    test_key.rt = undefined;
    _test_key_allKeys = [];
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(input_box);
    testComponents.push(test_img);
    testComponents.push(test_instruction);
    testComponents.push(test_key);
    
    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test' ---
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *input_box* updates
    if (t >= 0.0 && input_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_box.tStart = t;  // (not accounting for frame time here)
      input_box.frameNStart = frameN;  // exact frame index
      
      input_box.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (input_box.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      input_box.setAutoDraw(false);
    }
    
    // *test_img* updates
    if (t >= 0.0 && test_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_img.tStart = t;  // (not accounting for frame time here)
      test_img.frameNStart = frameN;  // exact frame index
      
      test_img.setAutoDraw(true);
    }
    
    
    if (test_instruction.status === PsychoJS.Status.STARTED){ // only update if being drawn
      test_instruction.setText('下線部分（２文字分）のスペルをキー入力し，単語を完成してください', false);
    }
    
    // *test_instruction* updates
    if (t >= 0.0 && test_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_instruction.tStart = t;  // (not accounting for frame time here)
      test_instruction.frameNStart = frameN;  // exact frame index
      
      test_instruction.setAutoDraw(true);
    }
    
    
    // *test_key* updates
    if (t >= 0.0 && test_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_key.tStart = t;  // (not accounting for frame time here)
      test_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { test_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { test_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { test_key.clearEvents(); });
    }
    
    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (test_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      test_key.status = PsychoJS.Status.FINISHED;
        }
      
    if (test_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = test_key.getKeys({keyList: ['return'], waitRelease: false});
      _test_key_allKeys = _test_key_allKeys.concat(theseKeys);
      if (_test_key_allKeys.length > 0) {
        test_key.keys = _test_key_allKeys[_test_key_allKeys.length - 1].name;  // just the last key pressed
        test_key.rt = _test_key_allKeys[_test_key_allKeys.length - 1].rt;
        test_key.duration = _test_key_allKeys[_test_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test' ---
    for (const thisComponent of testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_save
    // まず現在の値を変数に保存してからデータに記録
    let answer = input_box.text;
    psychoJS.experiment.addData('test_answer', answer);
    psychoJS.experiment.nextEntry();
    psychoJS.experiment.addData('input_box.text',input_box.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(test_key.corr, level);
    }
    psychoJS.experiment.addData('test_key.keys', test_key.keys);
    if (typeof test_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('test_key.rt', test_key.rt);
        psychoJS.experiment.addData('test_key.duration', test_key.duration);
        routineTimer.reset();
        }
    
    test_key.stop();
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_URL_allKeys;
var inst_URLComponents;
function inst_URLRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst_URL' ---
    t = 0;
    inst_URLClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst_URL.started', globalClock.getTime());
    key_URL.keys = undefined;
    key_URL.rt = undefined;
    _key_URL_allKeys = [];
    // keep track of which components have finished
    inst_URLComponents = [];
    inst_URLComponents.push(image_URL);
    inst_URLComponents.push(key_URL);
    
    for (const thisComponent of inst_URLComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst_URLRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst_URL' ---
    // get current time
    t = inst_URLClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_URL* updates
    if (t >= 0.0 && image_URL.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_URL.tStart = t;  // (not accounting for frame time here)
      image_URL.frameNStart = frameN;  // exact frame index
      
      image_URL.setAutoDraw(true);
    }
    
    
    // *key_URL* updates
    if (t >= 0.0 && key_URL.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_URL.tStart = t;  // (not accounting for frame time here)
      key_URL.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_URL.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_URL.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_URL.clearEvents(); });
    }
    
    if (key_URL.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_URL.getKeys({keyList: ['space'], waitRelease: false});
      _key_URL_allKeys = _key_URL_allKeys.concat(theseKeys);
      if (_key_URL_allKeys.length > 0) {
        key_URL.keys = _key_URL_allKeys[_key_URL_allKeys.length - 1].name;  // just the last key pressed
        key_URL.rt = _key_URL_allKeys[_key_URL_allKeys.length - 1].rt;
        key_URL.duration = _key_URL_allKeys[_key_URL_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst_URLComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst_URLRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst_URL' ---
    for (const thisComponent of inst_URLComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst_URL.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_URL.corr, level);
    }
    psychoJS.experiment.addData('key_URL.keys', key_URL.keys);
    if (typeof key_URL.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_URL.rt', key_URL.rt);
        psychoJS.experiment.addData('key_URL.duration', key_URL.duration);
        routineTimer.reset();
        }
    
    key_URL.stop();
    // the Routine "inst_URL" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
