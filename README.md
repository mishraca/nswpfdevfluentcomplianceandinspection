# Compliance and Inspection Case Management

Source for the police-owned Fluent application `x_au_nswp_cicsm`. Its
Compliance and inspection case table extends the shared Operational case table
in `x_au_nswp_pcm`. The CPOR 16D leaf table stores the application fields on
that same Task record.

The Employee Center record producer is defined as Active and Published. It has
two-column sections, native Save as Draft, client validation and server
validation. It has no user criteria. Its catalog association is intentionally
left for the police development instance administrator. The producer verifies
active referenced users and department, resolves the selected Manager's HR
Profile, and uses SAP HDA Position when present, otherwise SAP Position. It
records the position at submission; officers do not enter it. The producer
resolves its case service through the Core intake registration rather than a
service code in its script.

The backend application menu exposes compliance cases, CPOR cases and case
activities to the shared case worker role. The CPOR case list has a "New CPOR
application" action that opens the native producer. Staff should create an
application through that action rather than create an incomplete Task record.
The CPOR form has a case activities related list and a lifecycle Process Flow.
An after-insert rule uses the service's configured first support stage to
create a position-bound review activity. The position resolver checks live HR
Profile values with HDA priority.

The Manager support, Superintendent decision and inspection outcome actions
are defined for the shared workspace. Each action rechecks the current actor,
case lifecycle and configured stage on the server. Manager support also checks
the nominee's effective rank (`u_hda_rank` first, then `title`) against an
application-owned rank record selected for the approval stage, and resolves
their SAP HDA Position before SAP Position. The Superintendent rank rule is
bound to the Core final approval stage and active for police development
testing. Its stage reference and the police rank values need native checks.

Position authority fails closed if HR Profiles identify more than one active
holder for the same effective SAP position. A bounded assignment refresh is
defined to inspect 100 outstanding activities per run and continue from a
private application cursor. It is inactive pending native checks of HR reads,
vacancies, overlaps and activity updates. Access checks use live position
authority even while the displayed assignment has not yet refreshed.

The reviewer has a configured Request amendments action. The submitter's
amendment and resubmission operations act on the same CPOR case and review
activity; they do not create a revision record or draft case. A stage setting
and CPOR amendment rule select which submitted fields may change. The server
also enforces a fixed ceiling of CPOR application fields and checks the
actual submitter through Core case access policy. Case field auditing is
configured to record saved changes. Case and field write ACLs permit only the
configured amendment fields while information is awaited; all other fields
remain protected. Guarded client-callable methods are defined for the native
officer interface, which still needs to be connected and checked in the police
instance.

This branch is **not ready for operational use**. The Core CPOR service,
stages, review authority and amendment rules are active for police development
testing. The officer amendment interface, native police-instance verification
and activation of position assignment refresh are pending. The workspace
actions compile locally but have not been opened in the police instance.
The police instance now owns the Employee Center catalog and Standard Ticket
configuration. Cross-scope access and the end-to-end journey require native
review. A local build only validates SDK source; it does not establish native
behavior.

Install Core before this app and check the case type, process and stage
references before testing the first officer submission.
