const SEX_MAP = {
    F: 'female',
    M: 'male'
};

export class PersonConfig {
    constructor(data) {
        this.sex = SEX_MAP[data?.SEX];
        this.dateOfBirth = data?.BIRT?.DATE;
        this.dateOfDeath = data?.DEAT?.DATE;
        this.fullName = data?.NAME;

        const NAME = data?.NAME?.split(' ');
        const GIVN = data?.GIVN?.split(' ');
        this.firstName = NAME[0] || GIVN[0];
        this.middleName = NAME[1];
        this.lastName = NAME[2];
        this.maidenName = NAME[3];

        this.familyAsChild = data?.FAMC;
        this.familyAsSpouse  = data?.FAMS;
    }
}