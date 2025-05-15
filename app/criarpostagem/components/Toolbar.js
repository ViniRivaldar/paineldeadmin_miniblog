import { 
  FaBold, 
  FaItalic, 
  FaUnderline, 
  FaHeading, 
  FaListUl, 
  FaListOl 
} from 'react-icons/fa'

export default function Toolbar({ editor, headerLevel, setHeaderLevel }) {
  if (!editor) {
    return null
  }

  return (
    <div className="flex items-center gap-2 mb-4 p-2 bg-gray-100 rounded-md border border-gray-300 flex-wrap">
      <div className="flex items-center mr-2">
        <button
          type="button"
          onClick={() => {
            if (headerLevel) {
              editor.chain().focus().toggleHeading({ level: headerLevel }).run()
            }
          }}
          className={`px-2 py-1 rounded border flex items-center justify-center ${
            editor.isActive('heading') ? 'bg-[#191970] text-white' : 'bg-white'
          }`}
        >
          <FaHeading size={16} />
        </button>
        
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
          <option value="3">H4</option>
        </select>
      </div>

      <div className="h-6 w-px bg-gray-300 mx-1"></div>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded border ${
          editor.isActive('bold') ? 'bg-[#191970] text-white' : 'bg-white'
        }`}
        title="Negrito (Ctrl+B)"
      >
        <FaBold size={16} />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded border ${
          editor.isActive('italic') ? 'bg-[#191970] text-white' : 'bg-white'
        }`}
        title="Itálico (Ctrl+I)"
      >
        <FaItalic size={16} />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded border ${
          editor.isActive('underline') ? 'bg-[#191970] text-white' : 'bg-white'
        }`}
        title="Sublinhado (Ctrl+U)"
      >
        <FaUnderline size={16} />
      </button>

      <div className="h-6 w-px bg-gray-300 mx-1"></div>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded border ${
          editor.isActive('bulletList') ? 'bg-[#191970] text-white' : 'bg-white'
        }`}
        title="Lista com marcadores"
      >
        <FaListUl size={16} />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded border ${
          editor.isActive('orderedList') ? 'bg-[#191970] text-white' : 'bg-white'
        }`}
        title="Lista numerada"
      >
        <FaListOl size={16} />
      </button>
    </div>
  )
}