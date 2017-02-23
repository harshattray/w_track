import _ from 'lodash';
import  React  from 'react';
import  { Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';

function avg(data){
   return  _.round(_.sum(data)/data.length);
}

export default (props)=>{
    return(
        <div>
          <Sparklines height={100} width={150} data={props.data}>
              <SparklinesLine color={props.color}/>
              <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div> Average value: {avg(props.data)}</div>
        </div>
    );
}
