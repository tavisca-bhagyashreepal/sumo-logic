const data = [
              {team: 'Engineering', employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']},
              {team: 'Executive', employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']},
              {team: 'Finance', employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']},
              {team: 'Sales', employees: ['Ankit Jain', 'Anjali Maulingkar']}
            ];

export default class dataFactory {
    constructor() {
      'ngInject';
    }

    dataFeed(){
      return data;
    }

    static dataFactoryFunctions () {
        'ngInject';
        return new dataFactory();
    }
}
