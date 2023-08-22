export default function querries (db){

    const addUsers = async function (user_name){
        // let username = await db.oneOrNone('select id from greetings where user_name = $1',[user_name])
        // console.log(username)
        // if (username == null)
        await db.query('insert into greetings (user_name, names_count) values ($1, $2)', [user_name,1]);
    
        // else {

        // }
    }
    const counter = async function (){
        return await db.oneOrNone('SELECT COUNT(DISTINCT user_name) FROM greetings')
    }

    const greetNumber = async function (userName){
        return await db.oneOrNone('SELECT SUM(names_count) FROM greetings  WHERE user_name = $1',[userName])
    }

    const getUsers = async function (){
       return await db.query('SELECT DISTINCT user_name FROM greetings');
    }
    const deleteAll = async function(){
        await db.none("delete from greetings;")
    }
    return{
        addUsers,
        counter,
        getUsers,
        greetNumber,
        deleteAll
    }

}

