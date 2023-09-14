const fileSistem = require ('fs')
// const readLine = require ('readline')



const dir = './data'
if (!fileSistem.existsSync(dir)){
    fileSistem.mkdirSync(dir)
} 
const file ='./data/fileBaru.json'
if (!fileSistem.existsSync(file)){
    fileSistem.writeFileSync(file,'[]','utf-8')
}


// const rl = readLine.createInterface({
//     input : process.stdin,
//     output : process.stdout


//  })



// const question = (pertanyaan)=> {
//     return new Promise((resolve,rejects)=>{
//         rl.question(pertanyaan, (nama)=>{
//             resolve(nama)
//         })

    
//     })


// }



// const main = async() => {
//     const nama = await question('Nama saya  :')
//     const email = await question('Email saya  :')
//     const alamat = await question(' Saya tinggal di :')
//     const telp = await question(' berikut nomor telp saya  :')
//     const user = {nama, email, alamat, telp}



    
//     const validator = require('validator')
//     const emailCheck= validator.isEmail(email); 
//     const telpCheck = validator.isMobilePhone( telp , 'id-ID' )

//     if (emailCheck == false){
//         console.log("Email Salah")
         
//          rl.close()
//          return false
//     }
//     if (telpCheck == false){
//         console.log("Telp bukan dalam negeri")
       
//         rl.close()
//         return false
//     }
    
    


//     const data = fileSistem.readFileSync('data/fileBaru.json', 'utf-8')

    
//     const  arr = JSON.parse(data)

//     const cariEmail = arr.email

//     // const cariEmail = arr.find( (user)=> {
//     //     user.email == email
        
//     // })
//     //     // console.log(cariEmail)


//     if (cariEmail == email){
//         console.log("Email sudah terdaftar")
     
//         rl.close()
//         return false
//     }

//     // if (telp == telp){
//     //     console.log("nomor telp sudah terdaftar")

//     //     rl.close()
//     //     return false 


//     // }

//     arr.push(user)
      
    

//     fileSistem.writeFileSync('data/fileBaru.json',JSON.stringify(arr))
  

//     rl.close()


// }

// main()



//////////////////////////////////////////////////////////////////////////////////////////





 







const simpanUser = (nama,email,alamat,telp) => {
    console.log(nama + email + alamat + telp)
    const user = {nama, email, alamat, telp}



    
    const validator = require('validator')
    const emailCheck= validator.isEmail(email); 
    const telpCheck = validator.isMobilePhone( telp , 'id-ID' )

    if (emailCheck == false){
        console.log("Email Salah")
         
        //  rl.close()
         return false
    }
    if (telpCheck == false){
        console.log("Telp bukan dalam negeri")
       
        // rl.close()
        return false
    }
    
    


    const data = fileSistem.readFileSync('data/fileBaru.json', 'utf-8')

    
    const  arr = JSON.parse(data)

    
//   console.log(arr);

//     const cariEmail = arr.find((user) => {
//         user.email === email
        
//     })
      
// console.log(cariEmail);

//     if ( cariEmail){
//         console.log("Email sudah terdaftar")
     
       
//         return false
//     }

    // if (telp == telp){
    //     console.log("nomor telp sudah terdaftar")

    //     rl.close()
    //     return false 




    arr.push(user)
      
    

    fileSistem.writeFileSync('data/fileBaru.json',JSON.stringify(arr))
  

    // rl.close()


}

const tampilUser = () => {
    
    const data = fileSistem.readFileSync('data/fileBaru.json', 'utf-8')

    
    const  arr = JSON.parse(data)
    arr.forEach((element,i) => {
        console.log(i+1  +  '     Nama :  ' + element.nama + '   Email  :  ' + element.email + ' Alamat  :  ' + element.alamat + '  Nomor telp : ' + element.telp);
    });



}

const detailData = (nama) => {

    
    const data = fileSistem.readFileSync('data/fileBaru.json', 'utf-8')
    const  arr = JSON.parse(data)
    
     const detail=  arr.find((user) => {
                user.nama === nama

        
                console.log(user.nama);
        })









        }










module.exports = {simpanUser,tampilUser, detailData}