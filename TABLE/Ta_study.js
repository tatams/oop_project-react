import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import data from '../train_study_tabledata.json';
import {barchart}from '../graph';

const re=barchart.concat(data)

class Ta_study extends React.Component {

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
                width: '20%',
                ...this.getColumnSearchProps('id'),
                sorter: (a, b) => a.id.length - b.id.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title:'Negative for Pneumonia',
                dataIndex:'Negative_for_Pneumonia',
                width: '20%',
                ...this.getColumnSearchProps('Negative_for_Pneumonia'),
                sorter: (a, b) => a.Negative_for_Pneumonia.length - b.Negative_for_Pneumonia.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title:'Typical Appearance',
                dataIndex:'Typical_Appearance',
                width: '20%',
                ...this.getColumnSearchProps('Typical_Appearance'),
                sorter: (a, b) => a.Typical_Appearance.length - b.Typical_Appearance.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title:'Indeterminate Appearance',
                dataIndex:'Indeterminate_Appearance',
                width: '20%',
                ...this.getColumnSearchProps('Indeterminate_Appearance'),
                sorter: (a, b) => a.Indeterminate_Appearance.length - b.Indeterminate_Appearance.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title:'Atypical Appearance',
                dataIndex:'Atypical_Appearance',
                width: '20%',
                ...this.getColumnSearchProps('Atypical_Appearance'),
                sorter: (a, b) => a.Atypical_Appearance.length - b.Atypical_Appearance.length,
                sortDirections: ['descend', 'ascend'],
            },
        ];
        return <div className="table__all">
              <Table columns={columns} dataSource={re} pagination={{ pageSize: 50 }} scroll={{ y: 500,x:700} } />
              </div>
      }
}

export default Ta_study