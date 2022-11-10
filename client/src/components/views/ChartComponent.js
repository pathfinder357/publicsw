import React, {useState, useRef} from 'react'
// import { Icon, Col, Card, Row, Carousel } from 'antd';
import "antd/dist/antd.css";
import { Col, Row } from 'antd';

//차트 랜더링
//import NivoLine from './NivoLine';
//import NivoLine_compare from './NivoLine_compare';
import NivoLine from './ChartPage/NivoLine';
import NivoLine_compare from './ChartPage/NivoLine_compare';

////테이블 랜더링
//import temp_data_table from './table/temp_data_table'

//차트 json 데이터
//import temp_data from '../../../json_temp/temp_data';

//import temp_data from '../../json_temp/temp_data';
import temp_data from '../../json_temp/AutoScalingGroup';

//날짜
//import DatePickerComponent from '../Date/DatePickerComponent';
//import DateCompareComponent from '../Date/DateCompareComponent';
import DatePickerComponent from './Date/DatePickerComponent';
import DateCompareComponent from './Date/DateCompareComponent';

//체크,라디오 박스 불러오기
//import CheckBox from '../Box/CheckBox';
//import RadioBox from '../Box/RadioBox';
//import { column, comparecolumn } from '../Box/Checkboxdata';
import CheckBox from './Box/CheckBox';
import RadioBox from './Box/RadioBox';
import { column, comparecolumn } from './Box/Checkboxdata';

var _ = require('lodash'); //npm i lodash


function ChartComponent(props) {

    const temp = _.cloneDeep(temp_data)
    const mindate = temp[0].data[0].x;
    const index = temp[0].data.length-1;
    const maxdate = temp[0].data[index].x;
    var [data, setData] = useState([]);
    const templist = [];
    const [Filters, setFilters] = useState({column: []});

    var [compare, setCompare] = useState([]);
    const [Compares, setCompares] = useState({comparecolumn: [[],[]]});

    var [comparedata, setComparedata] = useState([]);

    for (var i=0;i<temp.length;i++) { templist.push(temp[i].id) }

    const [startDate, setStartDate] = useState(new Date(mindate));
    const [endDate, setEndDate] = useState(new Date(maxdate));

    const [selectdate, setSelectDate] = useState(new Date(mindate))

    if (data.length === 0) { data = _.cloneDeep(temp_data) }

    var [beforeJSON, setBeforeJSON] = useState([]);
    var [afterJSON, setAfterJSON] = useState([]);

    const handleFilters = (filters) => {

        if (filters.length === 0) {
            data = _.cloneDeep(temp_data)
        }
        else {
            data = []
            for (var i=0;i<filters.length;i++){
                data.push(temp[templist.indexOf(filters[i])])
            }
        }
        const newFilters = {...Filters}
        newFilters[column] = filters
        setData(data)
        setFilters(newFilters)
      };

      console.log(data);
      

    for (var i=0;i<data.length;i++){
        for (var k=0;k<data[i].data.length;k++){
            if ((new Date(data[i].data[k].x) < startDate) || (new Date(data[i].data[k].x) > endDate)) {
                data[i].data.splice(k, 1);
                k = _.cloneDeep(k) - 1
            }
        }
    }

    const handleCompares = (comparecolumn) =>{
        compare=[]
        setCompare(compare)
        const originJSON =  _.cloneDeep(temp[templist.indexOf(comparecolumn)])

        originJSON.id += " (After)"
        compare.push(temp[templist.indexOf(comparecolumn)])
        compare.push(originJSON)
        setCompare(compare)
    };

    beforeJSON = _.cloneDeep(compare[0])
    afterJSON = _.cloneDeep(compare[1])

    if (compare.length !== 0){
        for(i=beforeJSON.data.length-1;i>0;i--){
            if(new Date(beforeJSON.data[i].x) > selectdate){
                beforeJSON.data.splice(i, 1)
            }
        }

        for(i=0;i<afterJSON.data.length;i++){
            if(new Date(afterJSON.data[i].x) < selectdate){
                afterJSON.data.splice(i, 1)
                i = _.cloneDeep(i) - 1
            }
        }
        const tempBeforeJSON = _.cloneDeep(beforeJSON)
        const tempAfterJSON = _.cloneDeep(afterJSON)

        for (i=0; i<(beforeJSON.data.length<afterJSON.data.length ? beforeJSON.data.length:afterJSON.data.length); i++) {
            tempBeforeJSON.data[i].x =  beforeJSON.data[i].x + " & " + afterJSON.data[i].x
            tempBeforeJSON.data[i].y= beforeJSON.data[i].y
            tempAfterJSON.data[i].x =  beforeJSON.data[i].x + " & " + afterJSON.data[i].x
            tempAfterJSON.data[i].y= afterJSON.data[i].y
        }
        comparedata = [];
        comparedata.push(tempBeforeJSON)
        comparedata.push(tempAfterJSON)

    }

    return (
        <div>
            ChartComponent
            { /* Data 체크박스 */ }
            <div style={{ height: 100 }}>
                <Row gutter={[16, 16]}>
                    <Col lg={24} xs={24}>
                        <CheckBox list={column}  handleFilters={filters => handleFilters(filters)} />
                    </Col>
                </Row>
            </div>

            <div style={{ height: 600 }}>
                <NivoLine data = { data } />
            </div>

            <div>
              <p>Metric data</p>
              <p>mindate : {mindate} maxdate : {maxdate}</p>
              <p>{startDate.toDateString()} ~ {endDate.toDateString()}</p>
              <DatePickerComponent
                  mindate={new Date(mindate)}
                  maxdate={new Date(maxdate)}
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
              />
          </div>
          <br/>
          <br/>
          <br/>
          <br/>



          <br/>
          <br/>


            <br/>
            <br/>
        </div>
    )
}

export default ChartComponent
