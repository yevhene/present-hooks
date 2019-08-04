import React, { useState } from 'react'

function Speakers() {
  const [speakers, setSpeakers] = useState([{
    name: 'Yevhen Shemet',
    talk: 'React Hooks',
    country: 'Ukraine'
  }])

  const [isAddingSpeaker, setAddingSpeaker] = useState(false)

  function handleCreate(speaker) {
    setAddingSpeaker(false)
    setSpeakers([
      ...speakers,
      speaker
    ])
  }

  function handleUpdate(index, speaker) {
    setSpeakers([
      ...speakers.slice(0, index),
      speaker,
      ...speakers.slice(index + 1)
    ])
  }

  function handleRemove(index) {
    setSpeakers([
      ...speakers.slice(0, index),
      ...speakers.slice(index + 1)
    ])
  }

  return (
    <>
      <h1>Speakers</h1>

      <table>
        <thead>
          <tr><th>Name</th><th>Talk</th><th>Country</th><th></th><th></th></tr>
        </thead>
        <tbody>
          {speakers.map((speaker, index) => (
            <Speaker key={index} {...{
              index, speaker, onUpdate: handleUpdate, onRemove: handleRemove
            }} />
          ))}
        </tbody>
        {isAddingSpeaker &&
          <tfoot>
            <tr>
              <Form
                speaker={{name: '', talk: '', country: ''}}
                onSubmit={handleCreate}
                onCancel={() => setAddingSpeaker(false)}
              />
              <td></td>
            </tr>
          </tfoot>
        }
      </table>
      <button onClick={() => setAddingSpeaker(true)}>Add speaker</button>
    </>
  )
}

function Speaker({ speaker, index, onUpdate, onRemove }) {
  const [isEdited, setEdited] = useState(false)

  function handleSubmit(updatedSpeaker) {
    setEdited(false)
    onUpdate(index, updatedSpeaker)
  }

  return (
    <tr>
      {isEdited ?
        <Form
          speaker={speaker}
          onCancel={() => setEdited(false)}
          onSubmit={handleSubmit}
        /> :
        <Fields speaker={speaker} onEdit={() => setEdited(true)} />
      }
      <td><button onClick={() => onRemove(index)}>Remove</button></td>
    </tr>
  )
}

function Fields({ speaker, onEdit }) {
  return (
    <>
      <td>{speaker.name}</td>
      <td>{speaker.talk}</td>
      <td>{speaker.country}</td>
      <td><button onClick={onEdit}>Edit</button></td>
    </>
  )
}

function Form({ speaker, onCancel, onSubmit }) {
  const [name, setName] = useState(speaker.name)
  const [talk, setTalk] = useState(speaker.talk)
  const [country, setCountry] = useState(speaker.country)

  return (
    <>
      <td>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </td>
      <td>
        <input value={talk} onChange={(e) => setTalk(e.target.value)} />
      </td>
      <td>
        <input value={country} onChange={(e) => setCountry(e.target.value)} />
      </td>
      <td>
        <button onClick={onCancel}>Cancel</button>
        <button
          onClick={() => onSubmit({ name, talk, country })}
        >
          Submit
        </button>
      </td>
    </>
  )
}

export default Speakers
