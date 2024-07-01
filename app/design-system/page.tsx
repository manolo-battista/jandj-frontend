import React from "react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Divider from "@/components/ui/divider";
import Icon from "@/components/ui/icon";

export default function Page() {
  const colorCommonStyle = "border w-8 h-8";
  return (
    <div className="p-8">
      <Typography variant="heading-lg" className="mt-4">
        Typography Tokens
      </Typography>
      <Typography variant="body-lg" className="text-primary">
        Use typography to present your design and content as clearly and
        efficiently as possible.
      </Typography>
      <Typography variant="heading-xl">Heading XLarge</Typography>
      <Typography variant="heading-lg">Heading Large</Typography>
      <Typography variant="heading-md">Heading Medium</Typography>
      <Typography variant="heading-sm">Heading Small</Typography>
      <Typography variant="heading-xs">Heading XSmall</Typography>
      <Typography variant="heading-card">Heading Card</Typography>
      <Typography variant="body-xl">Body XLarge</Typography>
      <Typography variant="body-xl-medium">Body XLarge Medium</Typography>
      <Typography variant="body-xl-italic">Body XLarge Italic</Typography>
      <Typography variant="body-lg">Body Large</Typography>
      <Typography variant="body-md">Body Medium</Typography>
      <Typography variant="body-sm">Body Small</Typography>
      <Typography variant="body-xs">Body Extra Small</Typography>
      <Typography variant="legal">Legal</Typography>
      <Typography variant="legal-button">Label Button</Typography>
      <Typography variant="link">Link</Typography>

      <Divider />

      <Typography variant="heading-lg" className="mt-4">
        Core Color Tokens
      </Typography>
      <Typography variant="body-lg">
        Use color to create meaningful experiences while also expressing
        hierarchy, state, and brand identity
      </Typography>
      <div className="flex">
        <div className={cn("bg-red-100", colorCommonStyle)} />
        <div className={cn("bg-red-200", colorCommonStyle)} />
        <div className={cn("bg-red-300", colorCommonStyle)} />
        <div className={cn("bg-red-400", colorCommonStyle)} />
        <div className={cn("bg-red", colorCommonStyle)} />
        <div className={cn("bg-red-600", colorCommonStyle)} />
        <div className={cn("bg-red-700", colorCommonStyle)} />
        <div className={cn("bg-red-800", colorCommonStyle)} />
        <div className={cn("bg-red-900", colorCommonStyle)} />
      </div>
      <div className="flex">
        <div className={cn("bg-gray-100", colorCommonStyle)} />
        <div className={cn("bg-gray-200", colorCommonStyle)} />
        <div className={cn("bg-gray-300", colorCommonStyle)} />
        <div className={cn("bg-gray-400", colorCommonStyle)} />
        <div className={cn("bg-gray", colorCommonStyle)} />
        <div className={cn("bg-gray-600", colorCommonStyle)} />
        <div className={cn("bg-gray-700", colorCommonStyle)} />
        <div className={cn("bg-gray-800", colorCommonStyle)} />
        <div className={cn("bg-gray-900", colorCommonStyle)} />
      </div>
      <div className="flex">
        <div className={cn("bg-blue-100", colorCommonStyle)} />
        <div className={cn("bg-blue-200", colorCommonStyle)} />
        <div className={cn("bg-blue-300", colorCommonStyle)} />
        <div className={cn("bg-blue-400", colorCommonStyle)} />
        <div className={cn("bg-blue", colorCommonStyle)} />
        <div className={cn("bg-blue-600", colorCommonStyle)} />
        <div className={cn("bg-blue-700", colorCommonStyle)} />
        <div className={cn("bg-blue-800", colorCommonStyle)} />
        <div className={cn("bg-blue-900", colorCommonStyle)} />
      </div>

      <div className="flex">
        <div className={cn("bg-success-100", colorCommonStyle)} />
        <div className={cn("bg-success-200", colorCommonStyle)} />
        <div className={cn("bg-success-300", colorCommonStyle)} />
        <div className={cn("bg-success-400", colorCommonStyle)} />
        <div className={cn("bg-success", colorCommonStyle)} />
        <div className={cn("bg-success-600", colorCommonStyle)} />
        <div className={cn("bg-success-700", colorCommonStyle)} />
        <div className={cn("bg-success-800", colorCommonStyle)} />
        <div className={cn("bg-success-900", colorCommonStyle)} />
      </div>

      <div className="flex">
        <div className={cn("bg-warning-100", colorCommonStyle)} />
        <div className={cn("bg-warning-200", colorCommonStyle)} />
        <div className={cn("bg-warning-300", colorCommonStyle)} />
        <div className={cn("bg-warning-400", colorCommonStyle)} />
        <div className={cn("bg-warning", colorCommonStyle)} />
        <div className={cn("bg-warning-600", colorCommonStyle)} />
        <div className={cn("bg-warning-700", colorCommonStyle)} />
        <div className={cn("bg-warning-800", colorCommonStyle)} />
        <div className={cn("bg-warning-900", colorCommonStyle)} />
      </div>

      <div className="flex">
        <div className={cn("bg-error-100", colorCommonStyle)} />
        <div className={cn("bg-error-200", colorCommonStyle)} />
        <div className={cn("bg-error-300", colorCommonStyle)} />
        <div className={cn("bg-error-400", colorCommonStyle)} />
        <div className={cn("bg-error", colorCommonStyle)} />
        <div className={cn("bg-error-600", colorCommonStyle)} />
        <div className={cn("bg-error-700", colorCommonStyle)} />
        <div className={cn("bg-error-800", colorCommonStyle)} />
        <div className={cn("bg-error-900", colorCommonStyle)} />
      </div>

      <div className="flex">
        <div className={cn("bg-neutral", colorCommonStyle)} />
        <div className={cn("bg-neutral-black", colorCommonStyle)} />
      </div>

      <Divider />
      <Typography variant="heading-lg" className="mt-4">
        Icons
      </Typography>
      <div className="flex gap-2 flex-wrap">
        <Icon.AccessibleBathroom />
        <Icon.AccessibleParking />
        <Icon.Add />
        <Icon.AdvancedSurgery />
        <Icon.Aed />
        <Icon.AFib />
        <Icon.Ai />
        <Icon.Airplane />
        <Icon.Alert />
        <Icon.Ambulance />
        <Icon.Analysis />
        <Icon.Anxiety />
        <Icon.ApplicationOnAComputer />
        <Icon.ArrowDiagonal />
        <Icon.ArrowDown />
        <Icon.ArrowLeft />
        <Icon.ArrowRight />
        <Icon.ArrowUp />
        <Icon.ArrowUp />
        <Icon.Atom />
        <Icon.AuthorizedPermit />
        <Icon.Award />
        <Icon.BCellMalignancy />
        <Icon.Bariatric />
        <Icon.BariatricPatient />
        <Icon.Beaker />
        <Icon.Bell />
        <Icon.Biopatch />
        <Icon.Biosurgery />
        <Icon.BladderCancer />
        <Icon.BlankCalendar />
        <Icon.BloodCancer />
        <Icon.Brain />
        <Icon.BreastOncology />
        <Icon.Bus />
        <Icon.Cafe />
        <Icon.Calendar />
        <Icon.Carpool />
        <Icon.Charity />
        <Icon.Chart />
        <Icon.Chat />
        <Icon.ChatBot />
        <Icon.Check />
        <Icon.ChevronDown />
        <Icon.ChevronLeft />
        <Icon.ChevronUp />
        <Icon.Choice />
        <Icon.CircleCheck />
        <Icon.ClearSkin />
        <Icon.Clipboard />
        <Icon.Close />
        <Icon.Cloud />
        <Icon.Cmf />
        <Icon.CoatCloset />
        <Icon.CognitiveAccessibility />
        <Icon.Coin />
        <Icon.Collaboration />
        <Icon.Colorectal />
        <Icon.CombinedCalendarClock />
        <Icon.CommissioningStartUp />
        <Icon.Community />
        <Icon.Compliance />
        <Icon.Complications />
        <Icon.Computer />
        <Icon.ContinuousOozing />
        <Icon.CookingClass />
        <Icon.CrohnsDiseaseAlternative />
        <Icon.CrohnsDisease />
        <Icon.CustomerService />
        <Icon.Dashboard />
        <Icon.DataVisualization />
        <Icon.Database />
        <Icon.Decrease />
        <Icon.Deny />
        <Icon.Depression />
        <Icon.DifficultToAccess />
        <Icon.DigitalAccessibility />
        <Icon.DigitalHealth />
        <Icon.Distribution />
        <Icon.DoNotEnter />
        <Icon.Document />
        <Icon.Download />
        <Icon.DownloadPdf />
        <Icon.Education />
        <Icon.ElectricVehicle />
        <Icon.Elevator />
        <Icon.Email />
        <Icon.Endocutter />
        <Icon.Energy />
        <Icon.Ent />
        <Icon.Environment />
        <Icon.EspressoBar />
        <Icon.Euro />
        <Icon.ExerciseEquipment />
        <Icon.Exercise />
        <Icon.ExerciseRoom />
        <Icon.ExtremeTemperatures />
        <Icon.ExtremitiesCombo />
        <Icon.EyeNotVisible />
        <Icon.FaithRoom />
        <Icon.Family />
        <Icon.Faqs />
        <Icon.Fatigue />
        <Icon.FcRn />
        <Icon.FemaleSign />
        <Icon.Filter />
        <Icon.FinancialAnalysis />
        <Icon.FinancialEarnings />
        <Icon.Fingernail />
        <Icon.FireExtinguisher />
        <Icon.FireHose />
        <Icon.Flag />
        <Icon.Folder />
        <Icon.Formulation />
        <Icon.Gbp />
        <Icon.Gear />
        <Icon.GeneTherapy />
        <Icon.GeneralSurgery />
        <Icon.Giftbox />
        <Icon.Globe />
        <Icon.GovtBuilding />
        <Icon.GraphChart />
        <Icon.GreenInnovation />
        <Icon.Growth />
        <Icon.Guselkumab />
        <Icon.Happy />
        <Icon.HazardousEnergies />
        <Icon.HazardousMaterials />
        <Icon.Hcp />
        <Icon.HeadGears />
        <Icon.Headphones />
        <Icon.Health />
        <Icon.HealthcareProvider />
        <Icon.HealthyMealSubscription />
        <Icon.HealthyMovement />
        <Icon.HearingAccessibility />
        <Icon.Heart />
        <Icon.HematologicMalignancy />
        <Icon.Hernia />
        <Icon.HighPressureVesselBleeding />
        <Icon.Hip />
        <Icon.Home />
        <Icon.Homepage />
        <Icon.Hospital />
        <Icon.Hpb />
        <Icon.Image />
        <Icon.Immunology />
        <Icon.ImportantNews />
        <Icon.Increase />
        <Icon.Info />
        <Icon.Injury />
        <Icon.Insights />
        <Icon.Instructions />
        <Icon.InternalOrganHeart />
        <Icon.Joint />
        <Icon.Keyboard />
        <Icon.Knee />
        <Icon.Lab />
        <Icon.Laptop />
        <Icon.LargeDemographics />
        <Icon.Leader />
        <Icon.Leagues />
        <Icon.Library />
        <Icon.Lifecycle />
        <Icon.LiftingOperations />
        <Icon.Lightbulb />
        <Icon.Link />
        <Icon.Loading />
        <Icon.Lock />
        <Icon.LuggageRoom />
        <Icon.LungCancer2 />
        <Icon.LungCancer />
        <Icon.Lung />
        <Icon.LymphNode />
        <Icon.MailRoom />
        <Icon.MaleSign />
        <Icon.Manufacturing />
        <Icon.Mask />
        <Icon.MassageTherapy />
        <Icon.MaterialHandling />
        <Icon.MaternalFetal />
        <Icon.MedicationBottle />
        <Icon.MedicineSymbol />
        <Icon.Meeting />
        <Icon.MensRestroom />
        <Icon.MentalWellness />
        <Icon.Menu />
        <Icon.MetabolicSyndrome />
        <Icon.Microphone />
        <Icon.Moon />
        <Icon.Mri />
        <Icon.MyeloidMalignancy />
        <Icon.Narrow />
        <Icon.Network />
        <Icon.NeurologicalDisabilities />
        <Icon.Neuroscience />
        <Icon.Neutral />
        <Icon.Newsletter />
        <Icon.NoCellPhones />
        <Icon.NoFirearms />
        <Icon.NoFoodOrDrink />
        <Icon.NoParking />
        <Icon.NoSmoking />
        <Icon.Noise />
        <Icon.NutritionConsultation />
        <Icon.Nutrition />
        <Icon.Obgyn />
        <Icon.ObtainPermissionToUseSystems />
        <Icon.Office />
        <Icon.Oncology />
        <Icon.Osteoarthritis />
        <Icon.Osteoporosis />
        <Icon.OurCredo />
        <Icon.Outcomes />
        <Icon.Packaging />
        <Icon.Pain />
        <Icon.Partnerships />
        <Icon.Pause />
        <Icon.Payment />
        <Icon.Person />
        <Icon.PersonWithPsO1 />
        <Icon.Phone />
        <Icon.PhysicalAccessibility />
        <Icon.Pill />
        <Icon.Pin />
        <Icon.PlasticSurgery />
        <Icon.Population />
        <Icon.PotentialRebleedingRisk />
        <Icon.PowerButton />
        <Icon.PowerTools />
        <Icon.Precision />
        <Icon.PrevalentRheumatology />
        <Icon.Printing />
        <Icon.ProblematicBleeding />
        <Icon.Process />
        <Icon.Processes />
        <Icon.PrOs />
        <Icon.ProstateCancer2 />
        <Icon.ProstateCancer />
        <Icon.Prosthetics />
        <Icon.Psoriasis />
        <Icon.PsoriaticArthritisKnee />
        <Icon.PublicSpaces />
        <Icon.PulmonaryHypertension />
        <Icon.Quotation />
        <Icon.RareAutoantibody />
        <Icon.RecordButton />
        <Icon.Record />
        <Icon.RecycleAluminum />
        <Icon.RecycleCompost />
        <Icon.RecycleGlass />
        <Icon.Recycle />
        <Icon.RecyclePaper />
        <Icon.RecyclePlastic />
        <Icon.Remove />
        <Icon.RenewableEnergy />
        <Icon.Research />
        <Icon.Responder />
        <Icon.ResponsibleSourcing />
        <Icon.Retina />
        <Icon.Retirement />
        <Icon.Ribbon />
        <Icon.Robotics />
        <Icon.Rubbish />
        <Icon.Ruler />
        <Icon.SacroiliacJoint />
        <Icon.Safety />
        <Icon.Salon />
        <Icon.ScaleBodyWeight />
        <Icon.Scale />
        <Icon.Scalp />
        <Icon.ScalpItch />
        <Icon.ScalpPsOSpecialSites />
        <Icon.Science />
        <Icon.Search />
        <Icon.Share2 />
        <Icon.Share />
        <Icon.Shield />
        <Icon.Shopping />
        <Icon.Shoulder />
        <Icon.Skin />
        <Icon.SkinTones />
        <Icon.SleepDisturbance />
        <Icon.SlipsTripsFalls />
        <Icon.Slow />
        <Icon.SmallMolecule />
        <Icon.SoundOff />
        <Icon.SoundOn />
        <Icon.Speech />
        <Icon.SpineAlternative />
        <Icon.Spine />
        <Icon.Stairs />
        <Icon.Star />
        <Icon.Stationery />
        <Icon.StormShelter />
        <Icon.Strategy />
        <Icon.Stroke />
        <Icon.StudyDesign />
        <Icon.Sun />
        <Icon.Surgeon />
        <Icon.SurgicalVision />
        <Icon.Survey />
        <Icon.Sustainable />
        <Icon.Syringe />
        <Icon.Tablet />
        <Icon.TabletPill />
        <Icon.Target />
        <Icon.ThumbsDown />
        <Icon.ThumbsUp />
        <Icon.Thyroid />
        <Icon.Time />
        <Icon.TimeMovingBackwards />
        <Icon.Timer />
        <Icon.Toolkit />
        <Icon.Topical />
        <Icon.Torch />
        <Icon.TowAway />
        <Icon.Train />
        <Icon.TranspoVehicle />
        <Icon.Trauma />
        <Icon.Travel />
        <Icon.Treadmill />
        <Icon.UlcerativeColitis />
        <Icon.Umbrella />
        <Icon.Unhappy />
        <Icon.UnisexRestroom />
        <Icon.Urology />
        <Icon.Usd />
        <Icon.Vial />
        <Icon.Video />
        <Icon.VideoPlay />
        <Icon.VirtualMeeting />
        <Icon.VirtualReality />
        <Icon.VisibleResults />
        <Icon.VisionAccessibility />
        <Icon.VisionCare />
        <Icon.VisionCargoShip />
        <Icon.VisionLensRecycling />
        <Icon.VisionNaturalResources />
        <Icon.VisionShipping />
        <Icon.VisionSustainabilityVision />
        <Icon.VisionSustainableManufacturing />
        <Icon.WatchOut />
        <Icon.Water />
        <Icon.Webcam />
        <Icon.Webinar />
        <Icon.Wellness />
        <Icon.WellnessOnlineSeminar />
        <Icon.WellnessRetreat />
        <Icon.Wifi />
        <Icon.WomensRestroom />
        <Icon.WoundClosure />
        <Icon.Write />
        <Icon.XRay />
        <Icon.Yen />
      </div>
    </div>
  );
}
