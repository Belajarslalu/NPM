const yargs = require("yargs");

// console.log(process.argv)

//  yargs.command(
//     'add',
//     'menambahkan data baru', 
//     () => {},
//     (argv) => {
//         console.log(argv.nama + argv.email + argv.alamat + argv.telp)
        
//     }

//  )
 

//  yargs.parse()
 







//  yargs.command(
//     'delete',
//     'menghapus existing data', 
//     () => {},
//     (argv) => {
//         console.log(argv.nama + '   berhasil di hapus')
        
//     }

//  )
 

//  yargs.parse()

const user = require ('./index.js')

yargs.command({
        command : 'add',
        describe : 'menambahkan data baru', 
        builder : {
            nama:{
                describe:"nama lengkap",
                demandOption : true,
                type: "string"
            },
            email:{
                describe:"email",
                demandOption : false,
                type: "string"
            },
            alamat:{
                describe:"alamat lengkap",
                demandOption : false,
                type: "string"
            },
            telp:{
                describe:"telp",
                demandOption : false,
                type: "string"
            }
        },
        handler(argv)  {
            user.simpanUser(argv.nama, argv.email,argv.alamat,argv.telp)
            
        }
    
    })
     




    
yargs.command({
    command : 'list',
    describe : 'menampilkan existing data', 
    handler(argv)  {
       user.tampilUser()
        
    }

})
 



yargs.command({
    command : 'detail',
    describe : 'menampilkan detail data berdasarkan nama ', 
    builder : {
        nama:{
            describe:"nama lengkap",
            demandOption : true,
            type: "string"
        },
        
    },
    handler(argv)  {
        user.detailData(argv.nama)
        
    }

})



    
     yargs.parse()
     
