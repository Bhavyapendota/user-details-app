import React,{ useState , useEffect }from "react";
import MaterialTable from "material-table";
export const Table=()=>{
    const empList=[
        {name:"Ramesh",username:"Ramesh",email:"ramesh1@gmail.com",phone:9876578901,website:"https://ramesh.com"},
        {name:"Suresh",username:"Suresh",email:"suresh@gmail.com",phone:8765678341,website:"https://suresh.com"},
        {name:"Sriram",username:"Sriram",email:"sriram1@gmail.com",phone:7865467328,website:"https://sriram.com"},
        {name:"Srikanth",username:"Srikanth",email:"srikanth@gmail.com",phone:9876753421,website:"https://srikanth.com"}]
    const [data,setData]=useState(empList)
    const columns=[
        {
            title:"Name" ,field:"name"
        },
        {
            title :"Username" ,field:"username"
        },
        {
            title:"Email" ,field:"email"
        },
        {
            title:"Phone" ,field:"phone"
        },
        {
            title:"Website" ,field:"website"
        }
    ]
    
    return(
        <div>
        <MaterialTable title="Employee-Details"
               data={data}
               columns={columns}
               options={{
                   search:false,
                   paging:false
               }}
                   editable={{
                    onRowDelete:selectedRow=>new Promise((resolve,reject)=>{
                        const index=selectedRow.tableData.id;
                        const updatedRows=[...data]
                        updatedRows.splice(index,1)
                        setTimeout(()=>{
                            setData(updatedRows)
                            resolve()
                        },2000)
                    }),
                    onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
                        const index=oldRow.tableData.id;
                        const updatedRows=[...data]
                        updatedRow[index]=updatedRow
                        updatedRows.splice(index,1)
                        setTimeout(()=>{
                            setData(updatedRows)
                            resolve()
                        },2000)
               }),
                    onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
                           const updatedRows=[...data,newRow]
                           setTimeout(()=>{
                            setData(updatedRows)
                            resolve()
                        },2000)
                    })
                
            }}
        
              />
            
        </div>
    );
        }
            export default Table;
        
        