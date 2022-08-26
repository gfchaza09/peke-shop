import './styles.css';

export const ItemListContainer = ({dateStart, dateEnd}) => {
  return (
    <div className='container'>
        <h1>Sitio en construcción</h1>
        <p>Fecha de inicio: {dateStart}</p>
        <p>Fecha final: {dateEnd}</p>
    </div>
  )
}
