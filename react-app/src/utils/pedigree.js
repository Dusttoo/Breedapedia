export const calculateGen = (maxGenerations) => {
    let totalDogs = 1;
    let thisGeneration = 1
    for(let i=0; i < maxGenerations; i++) {
        thisGeneration = thisGeneration * 2
        totalDogs += thisGeneration
    }
    return totalDogs
}

export const buildPedigree = (dog, maxGenerations) => {
    let pedigreeData = []
    const util = new PedigreeBuilder('sire', 'dam');
    pedigreeData = util.generatePedigreeData(dog, maxGenerations)
    return pedigreeData
}

class PedigreeBuilder {
    constructor(topField, bottomField){
        this.pedigreeData = [];
        this.topField = topField;
        this.bottomField = bottomField;
    }

    generatePedigreeData(obj, depth){
        this.pedigreeData = [];
        this.process(obj, depth);
        return this.pedigreeData;
    }

    getMockObject(){
        return {
            [this.topField]: null,
            [this.bottomField]: null
        };
    }

    process(obj, depth){
        if (depth <= 0)
            return;

        if (this.pedigreeData.length == 0)
            this.pedigreeData.push([]);

        let father = obj[this.topField] || this.getMockObject();
        let mother = obj[this.bottomField] || this.getMockObject();

        var row = this.pedigreeData[this.pedigreeData.length - 1];
        row.push(father);
        this.process(father, depth - 1);

        this.pedigreeData.push([ mother ]);
        this.process(mother, depth - 1);
    }

}

export default PedigreeBuilder