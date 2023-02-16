import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'

const FormUsers = ({createNewUser,updateInfo,updataUserById,handleClose,setUpdateInfo}) => {

    const {reset,register,handleSubmit,}=useForm()


    useEffect(()=>{
        if(updateInfo){
            reset(updateInfo)
        }
        
    },[updateInfo])


    const submit = data => {
        if(updateInfo){
            updataUserById(updateInfo.id,data)
        }else{
            createNewUser(data)
        }
        reset(defaultValues)
        handleClose()
    }

    const handleX = () => {
        reset(defaultValues)
        setUpdateInfo()
        handleClose()

    }

    


  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <h2 className='form__title'>Form User</h2>
        <div onClick={handleX} className='form__x'>x</div>
        <div className='form__item'>
            <label className='form__label' htmlFor=" email">
            
            <img className='icon__formm' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPJJREFUSEvtldsRwUAUhr9UgAqUgEoogQ6oIDqhBDqhAypABcyf2TVn4uQikZeMfcrsnvPf9pKEjkfSMT79IlgAKTBtGdsF2AAH4diItDBuCR7bT8AsT/AMq0dg3pDI9mbirYNIoDnFtQcGNYkewDLEYnFcghFwB4aBpMqNVAs89tyCqEIHKlzFTSpxY1ULU653Qdg7HS+imIpOgYg8N3nVAhaBHYUObJHnRuvZEXRUf03gudGc9sdT3ZhAjdGNvm3WRQetVkQ1T6lb9ieoTO8jol8+duf4KtuLpouyBSaV2soLrsDae65b4vrt/fpldhLRC6AYNhngkXrwAAAAAElFTkSuQmCC"/>Email</label>
            <input className='form__input' {...register("email")} type="email" id='email' />
        </div>
        <div className='form__item'>
            <label className='form__label' htmlFor="password">
            <img className='icon__formm' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOBJREFUSEvtlfENATEUxn83gZgAk2ADG2ACMQE2sAEbMAKTYAMbuHxJRVXbdye5ROL6zzXNe9/v9bv2taDhUTSsT1XABFgAI1fQCdgA+mZHFcAemCZUBFnnCBZAlR+cwBI4uvkMWLn5OLcTCyALhoDEt0GlqlyQs2fdx2YswMNldIF7kN0HLm4tqVMVkIp7FvBnAJ31HSCP64wrMA9PVMw7BfbqKHuxyh34uTGA+eMS8GheC/Ddai0yD+7vWKSu2THrjQfcwg4QuwdqFXrF6t5mieshentGrXb95UZeaY0DSpPxMBnmGORhAAAAAElFTkSuQmCC"/>Password</label>
            <input className='form__input' {...register("password")} type="password" id='password' />
        </div>
        <div className='form__item'>
            <label className='form__label' htmlFor="firstName">
            <img className='icon__formm' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQ5JREFUSEvtlNEVwUAQRW86UIIO6AAVoAIlKAEdKIEK6AAd0IESdMB5zm7Oitns5hzxlfnJR96+u/NmkoKWq2jZnw6QTDgWUQ9YATPncAQ2wCPpWBHEAFdgUNGegckvAGPgFDESQKDssjpYu3gsE8Wk97FStIp15wUWQIJDxGEOaB5WyVydD4FS12QGN3c4ZS6dYn4vRAzQB7bA1LntXTT3wF1RSaPyN/8wrwOkhujnpG1TKZYv8xhAM1i6NkOQtkdD1lN56+lX2TS3AJr+InF9v0keInmZefVsOIO67ame89+DIKroFx4C1PIoFb57fzEiNI+GgGemuZdl/er/CmjYQJ48q808K1vVAZLpvQB1zC8ZDL5OrQAAAABJRU5ErkJggg=="/>First Name</label>
            <input className='form__input' {...register("first_name")} type="text" id='firstName' />
        </div>
        <div className='form__item'>
            <label className='form__label' htmlFor="lastName">
            <img className='icon__formm' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQ5JREFUSEvtlNEVwUAQRW86UIIO6AAVoAIlKAEdKIEK6AAd0IESdMB5zm7Oitns5hzxlfnJR96+u/NmkoKWq2jZnw6QTDgWUQ9YATPncAQ2wCPpWBHEAFdgUNGegckvAGPgFDESQKDssjpYu3gsE8Wk97FStIp15wUWQIJDxGEOaB5WyVydD4FS12QGN3c4ZS6dYn4vRAzQB7bA1LntXTT3wF1RSaPyN/8wrwOkhujnpG1TKZYv8xhAM1i6NkOQtkdD1lN56+lX2TS3AJr+InF9v0keInmZefVsOIO67ame89+DIKroFx4C1PIoFb57fzEiNI+GgGemuZdl/er/CmjYQJ48q808K1vVAZLpvQB1zC8ZDL5OrQAAAABJRU5ErkJggg=="/>Last Name</label>
            <input className='form__input' {...register("last_name")} type="text" id='lastName' />
        </div>
        <div className='form__item'>
            <label className='form__label' htmlFor="birthday">
            <img className='icon__formm' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP1JREFUSEvllGsNwkAQhL8qAAeAA3CAA3AADgAHoABwAA5AAUhAAjjAAWSau+S66aWvNOGxSf9cd2f2ZvY2oeVIWsanKsHLNVS6rnSiA/58gh0wAfo1vbkDB2Dj60OJBL6oCWzLRLDWYUjwBDrACLjVJBoDF0A3GViCygZGmsjghDf4HQJNwd74oKnaAlMnywlYOa29UkM3JPPwMeZJpP8yfAkcARUIvGs0L8pJsfMIzu4tWA91LlKFfy82Rw3Nim4gUgHp6wEPByjQMGI5fzBFVTes9SEqkV8VNbdEpky+pQsz7FZ7RG9AxjYJgWu0r5agCWi0tqnehU19P8EbodY4GVcQzfEAAAAASUVORK5CYII="/>Birthday</label>
            <input className='form__input' {...register("birthday")} type="date" id='birthday' />
        </div>
        <button className='form__btn'>{ updateInfo? 'Update' :'create'}</button>
    </form>
  )
}

export default FormUsers