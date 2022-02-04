/*   
   @@@@@@   @@   @      @  @@@@@@@   @@   @@  @@@@@@@@     
   @@       @@   @@    @@  @@        @@   @@     @@     
   @@@@     @@    @@  @@   @@ @@@@@  @@@@@@@     @@        
   @@       @@      @@     @@    @@  @@   @@     @@        
   @@       @@@@@@  @@     @@@@@@@   @@   @@     @@  
   
      
     @@      @@@@@      @@    @@@@@    @@@@@@   @    @    @    @
   @@ @@    @@        @@ @@   @@   @@  @@      @@@  @@@   @@  @@           
  @@@@@@@  @@        @@@@@@@  @@    @@ @@@@    @@ @@ @@    @@@@
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
require("dotenv").config();
const bcrypt = require('bcrypt')

const createDB = async () => {
  //create admin user for testing
  const password = await bcrypt.hash('admin', 10);
  console.log(password.length);
  await Users.findOrCreate({
    where:{ email: "admin@email.com" },
    defaults: { name: "adminTest",
                lastName: "adminLastname",
                birthday: "2000-01-01",
                password,
             // gender: "Other",
                rol: "Admin",
             // address: "Av Libertador",
             // cp: "CP1430",
             // telephone: 11547894 }
    }
  });
}

// Syncing all the models at once.

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, async () => {
    console.time("Se creo la base de datos con exito");
    try {
      await createDB();
      console.timeEnd("Se creo la base de datos con exito");
      console.log("%s listening at 3001");
    } catch (error) {
     console.log( {message: error.message} );
    }
  });
});
