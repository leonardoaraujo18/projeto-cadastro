
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
  {
    id: '2946sdsdsds',
    name: 'Jasmin',
    age: 16,
    email: 'jas@email.com',
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

      <div key={user.id}>
        <div>
          <p>Nome: {user.name}</p>
          <p>Idade: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
        <button>🗑️</button>
      </div>

      ))}

      

    </div>
  )
}

export default Home
