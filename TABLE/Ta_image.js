import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import data from '../train_image_tabledata.json';
import {id_val} from '../graph'

var img= data;
var values=0,box=[0,0,0],lab=[0,0,0],stu=0;
var i,box_other,lab_other;

for(i=0;i<img.length;i++){
    values++;
}

for(i=0;i<values;i++){
    if(img[i].boxes===''){
        box[0]+=1;
    }else if(img[i].boxes==="[{'x': 789.28836, 'y': 582.43035, 'width': 1026.65662, 'height': 1917.30292}, {'x': 2245.91208, 'y': 591.20528, 'width': 1094.66162, 'height': 1761.54944}]"){
        box[1]+=1;
    }else{
        box[2]+=1;
    }
}

box_other=box[2]
box[0]=Math.round(box[0]/values*100) 
box[1]=Math.round(box[1]/values*100)
box[2]=Math.round(box[2]/values*100)

for(i=0;i<values;i++){
    if(img[i].label==="none 1 0 0 1 1"){
        lab[0]+=1;
    }else if(img[i].label==="opacity 1 789.28836 582.43035 1815.94498 2499.73327 opacity 1 2245.91208 591.20528 3340.5737 2352.75472"){
        lab[1]+=1;
    }else{
        lab[2]+=1;
    }
}
lab_other=lab[2]
lab[0]=Math.round(lab[0]/values*100)
lab[1]=Math.round(lab[1]/values*100)
lab[2]=Math.round(lab[2]/values*100)

const result=[
  {
    'id':<section className="b__graphpadding">
    <center>
        <h2>{values}</h2>
            unique valuse
    </center></section>,
    'boxes':<section className="b__graphpadding">
    <div className="red">[null]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{box[0]}%<br></br></div>
    ['x': 789.28...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="blue">{box[1]}%<br></br></div>
    <div className="gray">Other({box_other})&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{box[2]}%</div>
    </section>,
    'label':<section className="b__graphpadding">
    none 1 0 0 1 1&nbsp;&nbsp;&nbsp;<div className="blue">{lab[0]}%<br></br></div>
    opacity 1 7...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="blue">{lab[1]}%<br></br></div>
    <div className="gray">Other({lab_other})&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{lab[2]}%</div>
    </section>,
    'StudyInstanceUID':<section className="b__graphpadding">
    <center>
            <h2>{id_val.values}</h2>
            unique valuse
    </center>
    </section>
  }
];
const re=result.concat(data)
class Ta_image extends React.Component {
  
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render=()=>{
        const columns=[     
            {
                title:'id',
                dataIndex:'id',
                width: '25%',
                ...this.getColumnSearchProps('id'),
                sorter: (a, b) => a.id.length - b.id.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title:'boxes',
                dataIndex:'boxes',
                width: '25%',
                ...this.getColumnSearchProps('boxes'),
                sorter: (a, b) => a.boxes.length - b.boxes.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title:'label',
                dataIndex:'label',
                width: '25%',
                ...this.getColumnSearchProps('label'),
                sorter: (a, b) => a.label.length - b.label.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title:'StudyInstanceUID',
                dataIndex:'StudyInstanceUID',
                width: '25%',
                ...this.getColumnSearchProps('StudyInstanceUID'),
                sorter: (a, b) => a.StudyInstanceUID.length - b.StudyInstanceUID.length,
                sortDirections: ['descend', 'ascend'],
            },
        ];
        return <div className="table__all">
                <Table columns={columns} dataSource={re} pagination={{ pageSize: 50 }} scroll={{ y: 500,x:700} } />
                </div>
  }
}

export default Ta_image
