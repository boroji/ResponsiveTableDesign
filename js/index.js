const hokm = {
    pasur: [],
    das: [],
    khal: ['del', 'khesht', 'spik', 'geshniz'],
    varagh: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    baziKon() {
        const {pasur, khal, varagh} = this;
        for (let varaghHa of varagh.split(',')) {
            for (let khalHa of khal) {
                pasur.push({khalHa, varaghHa})
            }
        }
    },
    bekesh() {
        const yeki = this.pasur.pop()
        this.das.push(yeki)
        return yeki
    }

}