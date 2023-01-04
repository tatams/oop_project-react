import 'chart.js';
import {Bar} from "react-chartjs-2";
import {train} from './train_study_barchart';

var t= train;
var n0=[0,0,0,0];
var n1=[0,0,0,0];
var i;
var values=0;

for(i=0;i<t.id.length;i++){
    values++;
}

for(i=0;i<t.Negative_for_Pneumonia.length;i++){
    if(t.Negative_for_Pneumonia[i]===1){
        n1[0]+=1;
    }else if(t.Negative_for_Pneumonia[i]===0){
        n0[0]+=1;
    }
}

for(i=0;i<t.Typical_Appearance.length;i++){
    if(t.Typical_Appearance[i]===1){
        n1[1]+=1;
    }else if(t.Typical_Appearance[i]===0){
        n0[1]+=1;
    }
}

for(i=0;i<t.Indeterminate_Appearance.length;i++){
    if(t.Indeterminate_Appearance[i]===1){
        n1[2]+=1;
    }else if(t.Indeterminate_Appearance[i]===0){
        n0[2]+=1;
    }
}

for(i=0;i<t.Atypical_Appearance.length;i++){
    if(t.Atypical_Appearance[i]===1){
        n1[3]+=1;
    }else if(t.Atypical_Appearance[i]===0){
        n0[3]+=1;
    }
}

const Config1 = {
    type: 'bar',
    labels: [0,1],
    datasets: [
        {
            label:"count",
            data:[n0[0],n1[0]],
            backgroundColor:'rgb(0, 123, 168)',
            borderColor:'rgb(0, 123, 168)',
            borderWidth: 1,
            barPercentage: 1,
            categoryPercentage: 1,
        }
    ],
};

const Config2 = {
    type: 'bar',
    labels: [0,1],
    datasets: [
        {
            label:"count",
            data:[n0[1],n1[1]],
            backgroundColor:'rgb(0, 123, 168)',
            borderColor:'rgb(0, 123, 168)',
            borderWidth: 1,
            barPercentage: 1,
            categoryPercentage: 1,
        }
    ],
};

const Config3 = {
    type: 'bar',
    labels: [0,1],
    datasets: [
        {
            label:"count",
            data:[n0[2],n1[2]],
            backgroundColor:'rgb(0, 123, 168)',
            borderColor:'rgb(0, 123, 168)',
            borderWidth: 1,
            barPercentage: 1,
            categoryPercentage: 1,
        }
    ],
};

const Config4 = {
    type: 'bar',
    labels: [0,1],
    datasets: [
        {
            label:"count",
            data:[n0[3],n1[3]],
            backgroundColor:'rgb(0, 123, 168)',
            borderColor:'rgb(0, 123, 168)',
            borderWidth: 1,
            barPercentage: 1,
            categoryPercentage: 1,
            
        }
    ],
};

const options = { 
    scales: { 
        y: { 
            display: false,
        },
    },
    plugins:{   
        legend: {
          display: false
        }
    },
}

export let id_val = {values}
export const barchart=[
      {
        'id':<section className="b__graphpadding">
        <center>
            <h2>{values}</h2>
                unique valuse
        </center></section>,
        'Negative_for_Pneumonia':<section className="b__graphpadding"><Bar data={Config1} width={5} height={5} options={options}/></section>,
        'Typical_Appearance':<section className="b__graphpadding"><Bar data={Config2} width={5} height={5} options={options}/></section>,
        'Indeterminate_Appearance':<section className="b__graphpadding"><Bar data={Config3} width={5} height={5}options={options}/></section>,
        'Atypical_Appearance':<section className="b__graphpadding"><Bar data={Config4} width={5} height={5} options={options}/></section>,
      }
];