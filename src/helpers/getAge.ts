const  getAge =(birthDate:string)=>{
    //I know this is not accurate format but just to handle till 2021
   return(2022-parseInt(birthDate.slice(birthDate.lastIndexOf("-")+1,birthDate.length)))
}
export default  getAge;