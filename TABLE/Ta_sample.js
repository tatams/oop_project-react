import React from 'react';
// import 'antd/dist/antd.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import data from '../sample_tabledata.json';

var sam = data
var values = 0,prediction = [0,0]
var i

for(i=0;i<sam.length;i++){
    values++
}

for(i=0;i<values;i++){
  if(sam[i].PredictionString==="none 1 0 0 1 1"){
    prediction[0]+=1
  }else{
    prediction[1]+=1
  }
}
prediction[0]=Math.round(prediction[0]/values*100)
prediction[1]=Math.round(prediction[1]/values*100)

const result=[
  {
    'id':<section className="b__graphpadding">
    <center>
        <h2>{values}</h2>
            unique valuse
    </center></section>,
    'PredictionString':<section className="b__graphpadding">
      none 1 0 0 1 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="blue">{prediction[0]}%<br></br></div>
      negative 1 0 0 1 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="blue">{prediction[1]}%</div></section>
  }
]
const re=result.concat(data)

class Ta_sample extends React.Component {

  state = {
    searchText: '',
    searchedColumn: '',
  }

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
                width: '30%',
                ...this.getColumnSearchProps('id'),
                sorter: (a, b) => a.id.length - b.id.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title:'PredictionString',
                dataIndex:'PredictionString',
                width: '30%',
                ...this.getColumnSearchProps('PredictionString'),
                sorter: (a, b) => a.PredictionString.length - b.PredictionString.length,
                sortDirections: ['descend', 'ascend'],
            },
        ];
        return <div className="table__all">
              <Table columns={columns} dataSource={re} pagination={{ pageSize: 50 }} scroll={{ y: 500,x:700}} />
              </div>
  }
}
export default Ta_sample
