// id: number
// material: string
// natoms: number
// space_group: string
// bandgap: number
// dfh: number
// Eg_fund: number
// Eg_direct: number
// fund: number
// hEg_dir: number
// SOC: number
// dir_SOC: number
export const COLUMNS = [
    {
      Header: 'Id',
      accessor: 'id',
    },
    {
      Header: 'Material',
      accessor: 'material',
    },
    {
        Header: 'Atoms',
        accessor: 'natoms',
    },
    {
        Header: 'Space Group',
        accessor: 'space_group',
    },
    {
        Header: 'Bandgap',
        accessor: 'bandgap',
    },
    {
        Header: 'DFH',
        accessor: 'dfh',
    },
    {
        Header: 'Eg_fund',
        accessor: 'Eg_fund',
    },
    {
        Header: 'Eg_direct',
        accessor: 'Eg_direct',
    },
    {
        Header: 'Fund',
        accessor: 'fund',
    },
    {
        Header: 'hEg_dir',
        accessor: 'hEg_dir',
    },
    {
        Header: 'SOC',
        accessor: 'SOC',
    },
    {
        Header: 'dir_SOC',
        accessor: 'dir_SOC',
    }
  ];