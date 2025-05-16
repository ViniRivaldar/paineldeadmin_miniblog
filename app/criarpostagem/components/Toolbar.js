import {
  FaBold, FaItalic, FaUnderline, FaHeading,
  FaListUl, FaListOl, FaImage
} from 'react-icons/fa'
import { useRef } from 'react'
import FotoPostStore from '../../../store/fotoPostStore'

const btnBase = 'p-2 rounded border cursor-pointer hover:bg-gray-200 transition'

export default function Toolbar({ editor, headerLevel, setHeaderLevel }) {
  const fileInputRef = useRef(null)
  const { addTempImage } = FotoPostStore()

  if (!editor) return null

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (file) {
      const tempURL = addTempImage(file)
      editor.chain().focus().insertContent(`<img src="${tempURL}" alt="imagem temporária" />`).run()
      e.target.value = null
    }
  }

  const renderButton = (icon, action, isActive, title) => (
    <button
      type="button"
      onClick={action}
      className={`${btnBase} ${isActive ? 'bg-[#191970] text-white' : 'bg-white'}`}
      title={title}
    >
      {icon}
    </button>
  )

  return (
    <div className="flex items-center gap-2 mb-4 p-2 bg-gray-100 rounded-md border border-gray-300 flex-wrap">
      {/* Heading */}
      <div className="flex items-center mr-2">
        {renderButton(<FaHeading size={16} />, () => {
          if (headerLevel) editor.chain().focus().toggleHeading({ level: headerLevel }).run()
        }, editor.isActive('heading'), 'Título')}

        <select
          value={headerLevel}
          onChange={(e) => {
            const level = parseInt(e.target.value)
            setHeaderLevel(level)
            editor.chain().focus().toggleHeading({ level }).run()
          }}
          className="ml-1 border rounded p-1"
        >
          <option value="2">H2</option>
          <option value="3">H3</option>
          <option value="4">H4</option>
        </select>
      </div>

      <div className="h-6 w-px bg-gray-300 mx-1" />

      {/* Formatting */}
      {renderButton(<FaBold size={16} />, () => editor.chain().focus().toggleBold().run(), editor.isActive('bold'), 'Negrito')}
      {renderButton(<FaItalic size={16} />, () => editor.chain().focus().toggleItalic().run(), editor.isActive('italic'), 'Itálico')}
      {renderButton(<FaUnderline size={16} />, () => editor.chain().focus().toggleUnderline().run(), editor.isActive('underline'), 'Sublinhado')}

      <div className="h-6 w-px bg-gray-300 mx-1" />

      {/* Lists */}
      {renderButton(<FaListUl size={16} />, () => editor.chain().focus().toggleBulletList().run(), editor.isActive('bulletList'), 'Lista com marcadores')}
      {renderButton(<FaListOl size={16} />, () => editor.chain().focus().toggleOrderedList().run(), editor.isActive('orderedList'), 'Lista numerada')}

      <div className="h-6 w-px bg-gray-300 mx-1" />

      {/* Imagem */}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className={`${btnBase} bg-white`}
        title="Inserir imagem"
      >
        <FaImage size={16} />
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  )
}
