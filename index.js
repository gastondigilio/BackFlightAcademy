/*   
   @@@@@@  @@   @      @  @@@@@@@   @@   @@  @@@@@@@@     
   @@      @@   @@    @@  @@        @@   @@     @@     
   @@@@    @@    @@  @@   @@ @@@@@  @@@@@@@     @@        
   @@      @@      @@     @@   @@   @@   @@     @@        
   @@      @@@@@@  @@     @@@@@@    @@   @@     @@  
   
      
     @@      @@@@@      @@    @@@@@    @@@@@@   @    @    @    @
   @@ @@    @@        @@ @@   @@  @@   @@      @@@  @@@   @@  @@           
  @@@@@@@  @@        @@@@@@@  @@    @  @@@@    @@ @@ @@    @@@@
  @@   @@   @@       @@   @@  @@  @@   @@      @@    @@     @@
  @@   @@    @@@@@   @@   @@  @@@@@    @@@@@@  @@    @@     @@      
  
  
                                                                      
                                            ,@@@                      
                @@@                     @@@@@@,                      
        @@@@@@@@@@@      @@@@         @@@@@@@@                        
         @@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@                           
                @@@@@@@@@@@@@@@@@@@@@@@@@                             
                      @@@@@@@@@@@@@@@@@@                              
                          @@@@@@@@@@@@@@                              
                          @@@@@@@@@@@@@@@                             
                         @@@@@@@@@@@@@@@@@@@                          
                      @@@@@       @@@@@@@                             
                   /@@@@.          @@@@@@@                            
       @@@@@@@@@@@@@@@              @@@@@@(@@&                        
          @@@@@@@@@@                 @@@@@@@                          
             %@@@@@@                  @@@@@                           
                @@@@@                  @@@@                           
                 @@@@                   @@@                           
                 
*/


const server = require('./src/setting/app.js');
const { conn, Users } = require('./src/setting/db.js');
const bcrypt = require('bcrypt')
require("dotenv").config();

const createDB = async () => {
  //create admin user for testing
  const password = await bcrypt.hash('admin', 10);
  await Users.findOrCreate({
    where:{ email: "admin@gmail.com" },
    defaults: { name: "adminTest",
                lastName: "adminLastname",
                birthday: "06/01/1996",
                password,
             // gender: "Other",
                role: "Admin",
                isVerified: true,
             // address: "Av Libertador",
             // cp: "CP1430",
             // telephone: 11547894
    }
  });
}

// Syncing all the models at once.

conn.sync({ force: false },).then(() => {
  server.listen(process.env.PORT || 3001, async () => {
    console.time("Se creo la base de datos con exito");
    try {
      await createDB();
      console.timeEnd("Se creo la base de datos con exito");
      console.log("Server listening at 3001");
    } catch (error) {
     console.log( {message: error.message} );
    }
  });
});
