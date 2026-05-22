// The six animated "screenshot" visuals that fill the Features showcase panels.
// All CSS-driven — no interactivity inside.

export function PortalVisual() {
  return (
    <div className="fv fv-portal" aria-hidden="true">
      <div className="window">
        <div className="chrome">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="brand">
            <span className="mark"></span>
            <span className="names">
              <span>sterling-surety.com / submit</span>
              <span>northpoint-bond.com / submit</span>
              <span>madison-trust.com / submit</span>
            </span>
          </span>
          <span className="badge">Powered by Huddle</span>
        </div>
        <div className="body">
          <div className="drop">
            <span className="hint">
              <svg viewBox="0 0 24 24">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"></path>
              </svg>
              Drop files
            </span>
          </div>
          <div className="uploads">
            <div className="item i1">
              <span className="check">
                <svg viewBox="0 0 24 24">
                  <polyline points="4 12 10 18 20 6"></polyline>
                </svg>
              </span>
              <span className="bar"></span>
            </div>
            <div className="item i2">
              <span className="check">
                <svg viewBox="0 0 24 24">
                  <polyline points="4 12 10 18 20 6"></polyline>
                </svg>
              </span>
              <span className="bar"></span>
            </div>
            <div className="item i3">
              <span className="check">
                <svg viewBox="0 0 24 24">
                  <polyline points="4 12 10 18 20 6"></polyline>
                </svg>
              </span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
        <span className="file f1"></span>
        <span className="file f2"></span>
        <span className="file f3"></span>
      </div>
    </div>
  );
}

export function AutoVisual() {
  return (
    <div className="fv fv-auto" aria-hidden="true">
      <div className="sources">
        <span className="src">
          <span className="ico"></span>
          <span className="lbl">Contracts</span>
        </span>
        <span className="src">
          <span className="ico"></span>
          <span className="lbl">RFPs</span>
        </span>
        <span className="src">
          <span className="ico"></span>
          <span className="lbl">Specs</span>
        </span>
      </div>
      <div className="node"></div>
      <div className="out">
        <span className="title">Bond Request</span>
        <span className="row"></span>
        <span className="row"></span>
        <span className="row"></span>
        <span className="row"></span>
      </div>
      <div className="flow-in" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}

export function TrackVisual() {
  return (
    <div className="fv fv-track" aria-hidden="true">
      <div className="stack">
        <div className="back s2"></div>
        <div className="back s3"></div>
        <div className="back s4"></div>
      </div>
      <div className="paper reject c1">
        <div className="lines"></div>
        <span className="lbl">Contract</span>
      </div>
      <div className="paper reject c2">
        <div className="lines"></div>
        <span className="lbl">RFP</span>
      </div>
      <div className="paper reject c3">
        <div className="lines"></div>
        <span className="lbl">Specs</span>
      </div>
      <div className="paper select">
        <span className="check">
          <svg viewBox="0 0 24 24">
            <polyline points="4 12 10 18 20 6"></polyline>
          </svg>
        </span>
        <div className="lines"></div>
        <span className="lbl">Bond Form</span>
      </div>
    </div>
  );
}

export function FillVisual() {
  return (
    <div className="fv fv-fill" aria-hidden="true">
      <div className="paper">
        <div className="paper-head">
          <span className="doctype">Performance Bond</span>
          <span className="bond-no">
            No. <i>HSB-002847</i>
          </span>
        </div>
        <div className="rows">
          <div className="row r1">
            <span className="lbl">Principal</span>
            <span className="field">
              <span className="val">Acme Contractors, LLC</span>
            </span>
          </div>
          <div className="row r2">
            <span className="lbl">Surety</span>
            <span className="field">
              <span className="val">Liberty Mutual Insurance</span>
            </span>
          </div>
          <div className="row r3">
            <span className="lbl">Obligee</span>
            <span className="field">
              <span className="val">City of Austin, TX</span>
            </span>
          </div>
          <div className="row r4">
            <span className="lbl">Penal Sum</span>
            <span className="field">
              <span className="val">$2,500,000.00</span>
            </span>
          </div>
          <span className="agent" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2zm7 11l.9 2.6L22 16l-2.1.4L19 19l-.9-2.6L16 16l2.1-.4L19 13zM5 14l.7 2L8 16.7l-2.3.3L5 19l-.7-2L2 16.7 4.3 16 5 14z"></path>
            </svg>
          </span>
        </div>
        <div className="signoff">
          <span>POWERED BY HUDDLE</span>
          <span className="stamp">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4 12 10 18 20 6"></polyline>
            </svg>
            Ready
          </span>
        </div>
      </div>
    </div>
  );
}

export function HighlightVisual() {
  return (
    <div className="fv fv-highlight" aria-hidden="true">
      <div className="doc">
        <span className="ln"></span>
        <span className="ln s"></span>
        <span className="ln m"></span>
        <span className="ln"></span>
        <span className="ln s"></span>
        <span className="hl"></span>
      </div>
    </div>
  );
}

export function OversightVisual() {
  return (
    <div className="fv fv-oversight" aria-hidden="true">
      <div className="topline">
        <span>Account&nbsp;A&middot;104</span>
        <span className="alert">
          <span
            className="ring"
            style={{ textAlign: "left", width: 1, height: 1 }}
          ></span>
          <span className="core"></span>
          <span>Trigger</span>
        </span>
      </div>
      <div className="bars">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar trig"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}
