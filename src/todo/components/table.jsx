import React from 'react';
import Button from './Button';  

class list extends React.Component{ 

 
render () {
  const fah = this.props.data
  const saveupdate = this.props.of
  const delsave = this.props.od
console.log(fah)


return (
<table className="table">
<tbody>
{fah.map(function(index,val){ 
console.log(index,val);
return(
    <tr key={val} className="center">
     <td>
     <div className="fah">{index} </div>
       
<Button text="update" indexs={index} className="btn btn-outline-success" ojclick={saveupdate} />
<Button text="del" indexs={index} className="btn btn-outline-danger" ojclick={delsave} />

 </td>
</tr>
    
    )   

})}

</tbody>
</table>


    )
}

}

export default list;