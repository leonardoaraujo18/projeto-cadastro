
import './style.css'

function Home() {

  const users = [
  {
    id: '2342sdsdsds',
    name: 'Rodolfo',
    age: 33,
    email: 'rod@email.com',
  }, 
  {
    id: '5742sdsdsds',
    name: 'Leonardo',
    age: 27,
    email: 'leo@email.com',
  },
]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Idade' name='idade' type='number' />
        <input placeholder='E-Mail' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (

      <div key={user.id} className='card'>
        <div>
          <p>Nome: <span>{user.name}</span></p>
          <p>Idade: <span>{user.age}</span></p>
          <p>Email: <span>{user.email}</span></p>
        </div>
        <button>🗑️</button>
      </div>

      ))}

      

    </div>
  )
}

export default Home
