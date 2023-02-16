import React from 'react'


const UserCard = ( {user,deleteUserById,setUpdateInfo,handleOpen}) => {

    const handleDelete = () => {
        deleteUserById(user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        handleOpen()
    }


  return (
    <article className='card'>
        <h2 className='card__name'>
        <img className='card__icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXdJREFUSEu1ldExBTEUhr9bAR2gAlRACVTAMw/oQAd44BUVoAQVoAM6oALmm8m5k92b7G6uuZnZh90k//fnnJOzM1Y8ZivWZwrgGNgDdtKjp/f0PAMvQyaHAAfAFbA5cspP4AIQtjBqgGvgrDF87hHUGSXAMuIhegOc54Q+wLA8NTrvLz/Mw9UHGM+NfwLU2AqNHGC13AM/wFoF4txlcqjQOrCfvm1ne+anyAEPwFFKlGVoLN0s7Atw3vx8V+AadI+gR8D3zj1Q1MndVOPLRMq78pb2q9MB/CbF/FS3wAlwB5z2iLW5jk4uVgLEt74Z32tzVUApRK0niBB9RFupJdlkLjNMsu2lmOS4ZJ06bqTEPSqWqVqxwJ7Seopwb0nPG+RQq2gp14i9JgdbhQvyZqcrG9jQCOeuGW12IZRDDJvvr9kF1LE/IcUjHAvipdrOnZp0hceanzEX1PTD6YOE6ToamnXuvVG0KFzqpo0VOW35lJ/+NKXKqj8AaFUZUiVAzwAAAABJRU5ErkJggg=="/> {`${user.first_name} ${user.last_name}`}
        </h2>
        <hr className='hr' />
        <ul className='card__items'>
            <li className='card__info'><span className='card__span'>Email</span>{user.email}</li>
            <li className='card__info'><span className='card__span'>Birthday</span>
            <img className='card__birthday' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANlJREFUSEvllf8RATEQhb+rwKgAldABJeiAElwFlKAEOqATOtAB80jMTkbmkpOb8WP/zOy+L8m+bCo6jqpjfXIBV7eh5LrkRCf8+YANMAWGLXtzArZA7evtFUl80VI4LBNgpUULuAC9QgCdZBQCfAMLMR6btyf4foBONAOWwDi4pyMgE+zcempe9CXLAQIpJHx3xItozAtdtLYeDgQl5m0s6NPrkbx+rMkHt+u9uQ4JTwKhprwfdFHn76DkqDj7gWldpCZqEg7enBUSnwMyQfaPls3O/dH+EHADSnwrGYaawuIAAAAASUVORK5CYII="/>{user.birthday} </li>
        </ul>
        <hr className='hr' />
        <div className='container__btn'>

        <button className='card__btn delete' onClick={handleDelete}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ9JREFUSEvt1csRwjAMRdGTSigB6IQSSAeUQCdQAp0AHZBKYFjwCzFyMgmbREuP5l3p2ZYKA0cxsL4cwBq7RCEl9r+KjAALHIMulzilcuqAa0+WPXX/DuipgZdM6g66WvWlNw7Ao8u6bU3nnSyaAI1P/93vyaIRWNRmAGZ/tAtmbZRxxn1BfURq2K2wxTwTUmGDQy4gUzdOi3ZyrBBk3AB+wyoZJl1mqQAAAABJRU5ErkJggg=="/></button>
        
        
        <button className='card__btn update' onClick={handleUpdate}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANRJREFUSEvFlX0RwjAMR98UgAQkgASUAIqQADiYBCQgAQk4gMtdy5Vd2vTz2N/re/kl6TYx+JkG82kVHF2B11ihLQKBXxz4BKiSWsEaeAKroHJVUiMQ+AvYAvdAcgN8y77eUoEAzsAeeASSWYOLpUQQ9lwSeMnGtUudc64ghHuQSHYpeG4CDS5n1Z4vY1gJZPUOSvYsuJWgGZ4SdIHHBDF49LamvmfaDN7KgSp4LMFSUA3PETTBrS3q8quw7kGz5C8CbYtKkvwUnbumXQUlMPPd4TP4APh7JRlD59qMAAAAAElFTkSuQmCC"/>
        </button>

        </div>
        
    </article>
  )
}

export default UserCard