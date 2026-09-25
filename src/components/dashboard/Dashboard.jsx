import '../../styles/dashboard/Dashboard.css'

const categories = [
  {
    title: 'Decorative Paints',
    description: 'Interior, exterior and decorative coating solutions.',
  },
  {
    title: 'Industrial Coatings',
    description: 'High-performance coatings for demanding applications.',
  },
  {
    title: 'Wood Care',
    description: 'Protection and finishing systems for timber surfaces.',
  },
  {
    title: 'Thinners & Solvents',
    description: 'Thinners and solvents for compatible coating systems.',
  },
]

const quickTools = [
  {
    title: 'Quick Calculator',
    description: 'Calculate materials for a specific coating.',
    action: 'Calculate now',
  },
  {
    title: 'Find a Coating',
    description: 'Find the right product for your surface and application.',
    action: 'Find a coating',
  },
  {
    title: 'Project Estimator',
    description: 'Plan materials across an entire painting project.',
    action: 'Start project',
  },
]

function Dashboard() {
  return (
    <div className="dashboard">

      {/* INTRO */}

      <section className="dashboard-intro">
        <p className="dashboard-eyebrow">
          DASHBOARD
        </p>

        <h1>
          What are you working on today?
        </h1>

        <p className="dashboard-description">
          Find the right coating, calculate materials, or plan your project.
        </p>
      </section>


      {/* QUICK TOOLS */}

      <section className="dashboard-tools">

        {quickTools.map((tool) => (
          <article
            className="dashboard-tool-card"
            key={tool.title}
          >
            <div className="dashboard-tool-content">

              <h2>
                {tool.title}
              </h2>

              <p>
                {tool.description}
              </p>

              <button type="button">
                {tool.action}
                <span aria-hidden="true">→</span>
              </button>

            </div>
          </article>
        ))}

      </section>


      {/* PRODUCT CATEGORIES */}

      <section className="dashboard-section">

        <div className="dashboard-section-header">
          <div>
            <p className="dashboard-eyebrow">
              PRODUCT RANGE
            </p>

            <h2>
              Explore our products
            </h2>
          </div>

          <button
            className="dashboard-text-button"
            type="button"
          >
            View all →
          </button>
        </div>


        <div className="dashboard-category-grid">

          {categories.map((category) => (
            <article
              className="dashboard-category-card"
              key={category.title}
            >
              
              <h3>
                {category.title}
              </h3>

              <p>
                {category.description}
              </p>

              <button type="button">
                Explore →
              </button>
            </article>
          ))}

        </div>

      </section>


      {/* BUDGET / FEATURED AREA */}

      <section className="dashboard-feature">

        <div>
          <p className="dashboard-eyebrow">
            VALUE OPTIONS
          </p>

          <h2>
            Looking for a practical option?
          </h2>

          <p>
            Explore products selected for value and everyday painting
            requirements.
          </p>
        </div>

        <button type="button">
          Explore options →
        </button>

      </section>

    </div>
  )
}

export default Dashboard