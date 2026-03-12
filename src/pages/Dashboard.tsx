import { useAuth } from '@/lib/auth-context';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import type { Id } from '../../convex/_generated/dataModel';
import { motion } from 'motion/react';
import { FaSignOutAlt, FaPlus, FaSeedling } from 'react-icons/fa';

export default function Dashboard() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const projects = useQuery(api.projects.list);
  const addProject = useMutation(api.projects.add);
  const removeProject = useMutation(api.projects.remove);
  const updateProject = useMutation(api.projects.update);
  const seedProjects = useMutation(api.projects.seed);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<Id<"projects"> | null>(null);
  const [form, setForm] = useState({ title: '', description: '', image_url: '', link: '', display_order: 0 });

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const sortedProjects = projects ? [...projects].sort((a, b) => a.display_order - b.display_order) : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await updateProject({ id: editingId, ...form });
      setEditingId(null);
    } else {
      await addProject(form);
    }
    setForm({ title: '', description: '', image_url: '', link: '', display_order: 0 });
    setShowForm(false);
  };

  const handleEdit = (project: typeof sortedProjects[0]) => {
    setEditingId(project._id);
    setForm({
      title: project.title,
      description: project.description,
      image_url: project.image_url,
      link: project.link,
      display_order: project.display_order,
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: Id<"projects">) => {
    if (confirm('Delete this project?')) {
      await removeProject({ id });
    }
  };

  const handleSeed = async () => {
    const result = await seedProjects();
    if (result === 'already seeded') {
      alert('Projects already exist in database');
    } else {
      alert('Default projects added!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-[#0a0a1a]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/divfixer logo.png" alt="DivFixer" className="h-8 w-auto" />
            <span className="text-lg font-bold">Agency Admin Panel</span>
          </div>
          <button
            onClick={() => { logout(); navigate('/login'); }}
            className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 text-sm"
          >
            <FaSignOutAlt className="text-xs" /> Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            Projects ({sortedProjects.length})
          </h2>
          <div className="flex gap-3">
            {sortedProjects.length === 0 && (
              <button
                onClick={handleSeed}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
              >
                <FaSeedling className="text-xs" /> Seed Default Projects
              </button>
            )}
            <button
              onClick={() => { setShowForm(!showForm); setEditingId(null); setForm({ title: '', description: '', image_url: '', link: '', display_order: sortedProjects.length + 1 }); }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
            >
              <FaPlus className="text-xs" /> Add Project
            </button>
          </div>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-4 text-lg">{editingId ? 'Edit Project' : 'New Project'}</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Project title" required
                className="px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })}
                placeholder="Project URL (https://...)" required
                className="px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                placeholder="Image path (e.g. /seekout03.svg)"
                className="px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number" value={form.display_order} onChange={(e) => setForm({ ...form, display_order: Number(e.target.value) })}
                placeholder="Display order" required
                className="px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Project description" required rows={3}
                className="md:col-span-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="md:col-span-2 flex gap-3">
                <button type="submit" className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                  {editingId ? 'Update' : 'Add Project'}
                </button>
                <button type="button" onClick={() => { setShowForm(false); setEditingId(null); }} className="px-6 py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Projects Table */}
        {projects === undefined ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
          </div>
        ) : sortedProjects.length === 0 ? (
          <div className="text-center py-16 text-white/50">
            <p className="text-lg mb-2">No projects yet</p>
            <p className="text-sm">Click "Seed Default Projects" to add the initial set, or "Add Project" to create one.</p>
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Image</th>
                    <th className="px-6 py-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Link</th>
                    <th className="px-6 py-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Order</th>
                    <th className="px-6 py-4 text-xs font-semibold text-white/50 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedProjects.map((project) => (
                    <motion.tr
                      key={project._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4">
                        {project.image_url ? (
                          <img
                            src={project.image_url}
                            alt={project.title}
                            className="w-16 h-16 object-cover rounded-lg bg-white/10"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
                            <span className="text-lg font-bold text-white/30">{project.title.charAt(0)}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-white">{project.title}</span>
                      </td>
                      <td className="px-6 py-4 max-w-xs">
                        <p className="text-sm text-white/60 line-clamp-2">{project.description}</p>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
                        >
                          View ↗
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white/70">{project.display_order}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(project)}
                            className="px-4 py-1.5 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(project._id)}
                            className="px-4 py-1.5 text-sm rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
