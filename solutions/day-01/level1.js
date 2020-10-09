class Statistics {

    constructor(arr){
        this.arr = arr;
    }

    count(){
        return this.arr.length;
    }

    sum(){
        return this.arr.reduce((acc, val) => val + acc , 0);
    }

    min(){
        return Math.min(...this.arr);
    }

    max(){
        return Math.max(...this.arr);
    }

    range(){
        return this.max() - this.min();
    }

    mean(){
        return this.sum() / this.count();
    }

    median(){
        const sorted = this.arr.sort();
        return sorted[Math.floor(this.count()/2)];
    }

    mode(){
        let obj = {};
        this.arr.forEach(e => {
            if (obj[e]){
                obj[e] = obj[e] + 1;
            }else{
                obj[e] = 1;
            }
        });

        //console.log(obj);

        //console.log(Math.max(...Object.values(obj)));

        const maxCount = Math.max(...Object.values(obj));

        for (const [key, value] of Object.entries(obj)) {
            if (value === maxCount) return parseInt(key);
        }
    }

    var(){

        let mean = this.mean();

        let temp = this.arr.reduce( (acc, value) => acc + Math.pow( (value - mean), 2) , 0 );

        return temp / (this.count() - 1);

    }

    std(){
        return  Math.sqrt(this.var());
    }

}


ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages);

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


