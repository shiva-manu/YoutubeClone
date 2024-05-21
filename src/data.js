const apiKey=`AIzaSyDkm9UUphWmdqZGZ8kcvkcS2FtAMx0GCPQ`;
 const valueConverter=(value)=>{
   if(value>=1000000){
      return Math.floor( value/1000000)+"M";
   }
   else if(value>=1000){
      return Math.floor(value/1000)+"K";
   }
   else{
      return value;
   }
}
export {apiKey,valueConverter}