import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import reference from '../data/referencePortfolio.json';
import { recruiterProfile as profile, projectLinks } from '../data/recruiterProfile';
import './RecruiterMode.css';

const categories = ['Artificial Intelligence', 'Frontend Engineering', 'Backend Engineering', 'Databases'];

export default function RecruiterMode() {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const headingRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    headingRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  function handleKeyDown(event) {
    if (event.key !== 'Tab') return;
    const controls = Array.from(dialogRef.current.querySelectorAll('a[href], button:not(:disabled)'));
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && (document.activeElement === first || document.activeElement === headingRef.current)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return <>
    <button ref={triggerRef} type="button" className="recruiter-trigger" aria-haspopup="dialog" aria-controls="recruiter-panel" aria-expanded={open} onClick={() => setOpen(true)}>
      Recruiter Mode <span aria-hidden="true">↗</span>
    </button>
    {createPortal(
      <dialog ref={dialogRef} id="recruiter-panel" className="recruiter-panel" aria-labelledby="recruiter-title" onCancel={event => { event.preventDefault(); setOpen(false); }} onKeyDown={handleKeyDown}>
        <header className="recruiter-header">
          <p>THE QUICK TAKE / RECRUITER MODE</p>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close Recruiter Mode">Close <span aria-hidden="true">×</span></button>
        </header>
        <div className="recruiter-content">
          <section aria-labelledby="recruiter-title">
            <h2 id="recruiter-title" ref={headingRef} tabIndex={-1}>{profile.name}</h2>
            <p className="recruiter-role">{profile.role}</p>
            <p className="recruiter-meta">{profile.location} <span aria-hidden="true">·</span> {profile.availability}</p>
            <p className="recruiter-summary">{profile.summary}</p>
            <div className="recruiter-actions">
              {profile.resumeUrl ? <a className="recruiter-primary" href={profile.resumeUrl} download>Resume ↓ (.docx)</a> : <a className="recruiter-primary" href={`mailto:${profile.email}?subject=Request%20for%20Revathi%20KM%27s%20resume`}>Request resume</a>}
              <a href={`mailto:${profile.email}`}>Email me</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
            {!profile.resumeUrl && <p className="recruiter-note">No resume file is linked yet. Request a copy by email.</p>}
          </section>
          <section aria-labelledby="recruiter-work">
            <h3 id="recruiter-work">Selected work <span>03 PROJECTS</span></h3>
            <ol className="recruiter-projects">
              {reference.projects.map(project => <li key={project.num}>
                <a href={projectLinks[project.name]} target="_blank" rel="noopener noreferrer">{project.name} <span aria-hidden="true">↗</span></a>
                <p className="recruiter-project-role">{project.role}</p>
                <p>{project.bullets.find(bullet => bullet.startsWith('Solution Overview:'))?.replace('Solution Overview: ', '')}</p>
              </li>)}
            </ol>
          </section>
          <section aria-labelledby="recruiter-skills">
            <h3 id="recruiter-skills">Relevant skills</h3>
            <dl className="recruiter-skills">
              {categories.map(category => <div key={category}>
                <dt>{category}</dt>
                <dd>{reference.skills.filter(skill => skill.category === category).slice(0, 4).map(skill => skill.name).join(' · ')}</dd>
              </div>)}
            </dl>
          </section>
          <p className="recruiter-note">Project and LinkedIn links open in a new tab.</p>
        </div>
      </dialog>, document.body)}
  </>;
}
