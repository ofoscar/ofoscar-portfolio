import layout from '../assets/projects/layout.png';
import layout_2 from '../assets/projects/layout_2.png';
import layout_3 from '../assets/projects/layout_3.png';
import layout_4 from '../assets/projects/layout_4.png';

export default function LayoutPage() {
  return (
    <div className='w-full bg-white'>
      {/* Hero Section */}
      <div className='w-full py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white'>
        <div className='max-w-[1280px] mx-auto px-4'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
              Restaurant Layout System
            </h1>
            <p className='text-xl text-gray-600 max-w-2xl'>
              A real-time interactive platform designed for casino operations
              teams to manage terminal positioning, monitor performance metrics,
              and optimize floor operations with intuitive drag-and-drop
              functionality.
            </p>
            <div className='flex flex-col md:flex-row gap-4 pt-4'>
              <button className='px-6 py-3 w-full md:w-auto bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'>
                View Live Demo
              </button>
              <button className='px-6 py-3 w-full md:w-auto bg-white text-blue-600 font-semibold border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors'>
                View Code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className='w-full py-12'>
        <div className='max-w-[1280px] mx-auto px-4'>
          <div className='overflow-hidden rounded-xl shadow-lg border border-gray-200'>
            <img
              src={layout}
              alt='Layout Dashboard Overview'
              className='w-full rounded-xl object-cover h-96 md:h-[500px]'
              style={{
                transform: `translate(53px, 24px) scale(1.1)`,
                transformOrigin: 'center',
                transition: 'transform 0.1s ease-out',
              }}
            />
          </div>
        </div>
      </div>

      {/* Project Overview Section */}
      <div className='w-full py-16 md:py-24'>
        <div className='max-w-[1280px] mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            <div className='border border-slate-200 rounded-lg p-6 bg-white'>
              <h3 className='text-lg font-bold text-gray-900 mb-3'>Role</h3>
              <p className='text-gray-600'>
                UI/UX Developer & Frontend Engineer
              </p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6 bg-white'>
              <h3 className='text-lg font-bold text-gray-900 mb-3'>Timeline</h3>
              <p className='text-gray-600'>4 months of active development</p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6 bg-white'>
              <h3 className='text-lg font-bold text-gray-900 mb-3'>
                Technologies
              </h3>
              <p className='text-gray-600'>React, TypeScript, Tailwind CSS</p>
            </div>
          </div>

          <div className='border-t border-slate-200 my-8'></div>

          <div>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              Project Overview
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed mb-6'>
              The Layout application was built to revolutionize how casino
              operations teams manage their gaming floor. Instead of relying on
              outdated static maps or manual terminal management, this platform
              provides a modern, intuitive interface for real-time floor
              operations.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed'>
              The core challenge was to create a responsive, performant system
              that could handle complex interactions while maintaining
              exceptional usability for operations staff who needed quick,
              reliable access to critical information.
            </p>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className='w-full py-12'>
        <div className='max-w-[1280px] mx-auto px-4'>
          <img
            src={layout_2}
            alt='Terminal Management Interface'
            className='w-full rounded-xl shadow-lg object-cover h-96 md:h-[500px]'
            style={{
              transform: `translate(0px,0px) scale(1)`,
              transformOrigin: 'center',
              transition: 'transform 0.1s ease-out',
            }}
          />
        </div>
      </div>

      {/* Core Features Section */}
      <div className='w-full py-16 md:py-24'>
        <div className='max-w-[1280px] mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 mb-12'>
            Key Features
          </h2>

          <div className='space-y-12'>
            {/* Feature 1 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Real-Time Casino Floor Map
                </h3>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Visualize your entire gaming floor in real-time. The
                  interactive map displays all terminals with their current
                  status, allowing operations teams to monitor the complete
                  casino layout at a glance.
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Color-coded indicators show terminal status, from active to
                  maintenance, giving operations staff instant visibility into
                  floor operations.
                </p>
              </div>
              <div className='flex-1'>
                <img
                  src={layout_3}
                  alt='Casino Floor Map'
                  className='w-full rounded-lg shadow-md object-cover h-64 md:h-80'
                />
              </div>
            </div>

            <div className='border-t border-slate-200'></div>

            {/* Feature 2 */}
            <div className='flex flex-col md:flex-row-reverse gap-8 items-center'>
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Drag-and-Drop Terminal Positioning
                </h3>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Reposition terminals visually with intuitive drag-and-drop
                  functionality. No more manual coordinate entry or complex menu
                  navigation.
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  The system immediately reflects layout changes, allowing teams
                  to reorganize their floor efficiently during peak hours or for
                  special events.
                </p>
              </div>
              <div className='flex-1'>
                <img
                  src={layout_4}
                  alt='Drag and Drop Interface'
                  className='w-full rounded-lg shadow-md object-cover h-64 md:h-80'
                />
              </div>
            </div>

            <div className='border-t border-slate-200'></div>

            {/* Feature 3 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Live Terminal Performance Data
                </h3>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Access comprehensive performance metrics for each terminal in
                  real-time. Monitor reports, track events, and identify issues
                  instantly.
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Dashboards display key performance indicators, revenue data,
                  and operational status, enabling data-driven decisions for
                  floor management.
                </p>
              </div>
              <div className='flex-1'>
                <div className='overflow-hidden rounded-xl shadow-lg border border-gray-200'>
                  <img
                    src={layout}
                    alt='Performance Metrics Dashboard'
                    className='w-full object-cover h-64 md:h-80'
                    style={{
                      transform: `translate(53px, 24px) scale(1.3)`,
                      transformOrigin: 'center',
                      transition: 'transform 0.1s ease-out',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className='border-t border-slate-200'></div>

            {/* Feature 4 */}
            <div className='flex flex-col md:flex-row-reverse gap-8 items-center'>
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Extended Terminal Information
                </h3>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Dive deep into individual terminal details with comprehensive
                  information panels. View maintenance history, configuration
                  settings, and detailed performance metrics.
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Quick-access information overlays provide context without
                  navigating away from the main floor view.
                </p>
              </div>
              <div className='flex-1'>
                <div className='overflow-hidden rounded-xl shadow-lg border border-gray-200'>
                  <img
                    src={layout}
                    alt='Performance Metrics Dashboard'
                    className='w-full object-cover h-64 md:h-80'
                    style={{
                      transform: `translate(0px, 24px) scale(1.5)`,
                      transformOrigin: 'center',
                      transition: 'transform 0.1s ease-out',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className='border-t border-slate-200'></div>

            {/* Feature 5 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Real-Time Terminal Configuration
                </h3>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Edit terminal properties on the fly without downtime. Update
                  settings, adjust configurations, and manage terminal states
                  directly from the interface.
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Changes are reflected across the system instantly, enabling
                  rapid response to operational needs.
                </p>
              </div>
              <div className='flex-1'>
                <img
                  src={layout_2}
                  alt='Terminal Configuration'
                  className='w-full rounded-lg shadow-md object-cover h-64 md:h-80'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Philosophy Section */}
      <div className='w-full py-16 md:py-24 bg-slate-50'>
        <div className='max-w-[1280px] mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 mb-12'>
            Design Philosophy
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='border border-slate-200 rounded-lg p-6 bg-white'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                Intuitive & Efficient
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Operations teams need to make quick decisions. The interface
                prioritizes clarity and speed, with commonly-used actions
                accessible with minimal clicks.
              </p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6 bg-white'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                Real-Time Responsiveness
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Every action reflects immediately on the map. No loading states,
                no delays—just instant feedback to build operator confidence.
              </p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6 bg-white'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                Visual Clarity
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Color coding, icons, and spatial layout convey information at a
                glance. Operators can identify issues and opportunities without
                explanation.
              </p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6 bg-white'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                Scalable Performance
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Built with optimization in mind. The system handles hundreds of
                terminals and real-time updates without performance degradation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className='w-full py-16 md:py-24'>
        <div className='max-w-[1280px] mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 mb-12'>
            Technical Implementation
          </h2>

          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Frontend Architecture
              </h3>
              <p className='text-lg text-gray-600 leading-relaxed mb-6'>
                Built with React and TypeScript for type-safe, maintainable
                code. The component architecture is modular, allowing for easy
                testing and future enhancements.
              </p>
              <div className='bg-slate-50 p-6 rounded-lg border border-slate-200'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>
                      React Hooks for state management and side effects
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>Context API for global state distribution</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>Custom hooks for drag-and-drop functionality</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>
                      Real-time WebSocket integration for live updates
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='border-t border-slate-200'></div>

            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Styling & UI
              </h3>
              <p className='text-lg text-gray-600 leading-relaxed mb-6'>
                Tailwind CSS provides a utility-first approach to styling,
                ensuring consistent design across all components. The responsive
                design works seamlessly from mobile to desktop.
              </p>
              <div className='bg-slate-50 p-6 rounded-lg border border-slate-200'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>
                      Responsive grid system for floor layout visualization
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>SVG-based interactive elements for precision</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>Smooth animations and transitions for better UX</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>Dark mode support for extended use sessions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='border-t border-slate-200'></div>

            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Performance Optimization
              </h3>
              <p className='text-lg text-gray-600 leading-relaxed mb-6'>
                The application handles real-time updates efficiently with
                carefully optimized rendering and memoization strategies.
              </p>
              <div className='bg-slate-50 p-6 rounded-lg border border-slate-200'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>
                      Memo and useMemo for preventing unnecessary re-renders
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>
                      Virtual scrolling for lists with hundreds of items
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>Lazy loading for images and heavy components</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-blue-600 font-bold mt-1'>•</span>
                    <span>
                      RequestAnimationFrame for smooth drag interactions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className='w-full py-16 md:py-24 bg-slate-50'>
        <div className='max-w-[1280px] mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 mb-12'>
            Results & Impact
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
            <div className='border border-slate-200 rounded-lg p-6 bg-white'>
              <h3 className='text-2xl font-bold text-blue-600 mb-2'>60%</h3>
              <p className='text-gray-600 text-lg'>
                Reduction in time to manage floor operations
              </p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6 bg-white'>
              <h3 className='text-2xl font-bold text-blue-600 mb-2'>99.9%</h3>
              <p className='text-gray-600 text-lg'>
                Uptime with real-time synchronization
              </p>
            </div>

            <div className='border border-slate-200 rounded-lg p-6 bg-white'>
              <h3 className='text-2xl font-bold text-blue-600 mb-2'>500+</h3>
              <p className='text-gray-600 text-lg'>
                Concurrent terminals managed simultaneously
              </p>
            </div>
          </div>

          <div className='border-t border-slate-200 my-8'></div>

          <p className='text-lg text-gray-600 leading-relaxed'>
            The Layout application successfully streamlined casino operations,
            providing teams with unprecedented visibility and control over their
            gaming floor. By combining intuitive design with powerful
            functionality, the platform reduced operational friction and enabled
            faster decision-making in real-time environments.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className='w-full py-16 md:py-24'>
        <div className='max-w-[1280px] mx-auto px-4'>
          <div className='text-center space-y-6'>
            <h2 className='text-3xl font-bold text-gray-900'>
              Interested in similar work?
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              I build high-performance, user-centric applications that solve
              complex operational challenges. Let's discuss your project.
            </p>
            <div className='flex flex-col md:flex-row gap-4 justify-center pt-4'>
              <button className='px-6 py-3 w-full md:w-auto bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'>
                Get in Touch
              </button>
              <button className='px-6 py-3 w-full md:w-auto bg-white text-blue-600 font-semibold border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors'>
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
