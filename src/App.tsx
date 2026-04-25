interface Feature {
  title: string;
  description: string;
}

interface RoleSection {
  role: 'Student' | 'Teacher';
  headline: string;
  features: Feature[];
}

const roleSections: RoleSection[] = [
  {
    role: 'Student',
    headline: 'Learn with live + recorded classes',
    features: [
      {
        title: 'Course Enrollment',
        description: 'Browse and enroll in coaching batches with a clean dashboard.'
      },
      {
        title: 'Live Classes',
        description: 'Join scheduled classes and revisit recordings anytime.'
      },
      {
        title: 'Tests & Results',
        description: 'Attempt quizzes and track your progress chapter-wise.'
      }
    ]
  },
  {
    role: 'Teacher',
    headline: 'Manage teaching with one powerful panel',
    features: [
      {
        title: 'Course Management',
        description: 'Create courses, batches, and publish lessons quickly.'
      },
      {
        title: 'Content Upload',
        description: 'Upload videos, notes, and assignments in one place.'
      },
      {
        title: 'Performance Analytics',
        description: 'Monitor student attendance and test performance instantly.'
      }
    ]
  }
];

function RoleCard({ section }: { section: RoleSection }): JSX.Element {
  return (
    <article className="role-card">
      <h3>{section.role}</h3>
      <p className="headline">{section.headline}</p>
      <ul>
        {section.features.map((feature) => (
          <li key={feature.title}>
            <strong>{feature.title}</strong>
            <span>{feature.description}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function App(): JSX.Element {
  return (
    <main className="container">
      <section className="hero">
        <p className="badge">Coaching Platform MVP</p>
        <h1>Teacher + Student Portal Website</h1>
        <p>
          A production-ready React + TypeScript starting point for your coaching platform,
          inspired by modern learning applications.
        </p>
      </section>

      <section className="grid" aria-label="Role-based feature overview">
        {roleSections.map((section) => (
          <RoleCard key={section.role} section={section} />
        ))}
      </section>
    </main>
  );
}
